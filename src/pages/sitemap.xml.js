import { projects } from '../constants/constants';
import { site } from '../constants/site';
import i18nConfig from '../../next-i18next.config';

const { locales, defaultLocale } = i18nConfig.i18n;

const localeUrl = (locale, path) =>
  locale === defaultLocale ? `${site.url}${path}` : `${site.url}/${locale}${path}`;

/**
 * Generated at request time so adding a case study or a locale needs no extra
 * step. Each entry carries xhtml:link alternates for the other languages.
 */
const buildSitemap = () => {
  const paths = ['', ...projects.map((p) => `/case-studies/${p.slug}`)];

  const urls = paths
    .flatMap((path) =>
      locales.map((locale) => {
        const alternates = locales
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt}" href="${localeUrl(
                alt,
                path
              )}" />`
          )
          .join('\n');

        return [
          '  <url>',
          `    <loc>${localeUrl(locale, path)}</loc>`,
          alternates,
          `    <changefreq>${path ? 'monthly' : 'weekly'}</changefreq>`,
          `    <priority>${path ? '0.8' : '1.0'}</priority>`,
          '  </url>',
        ].join('\n');
      })
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
};

// Rendering happens entirely in getServerSideProps.
const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(buildSitemap());
  res.end();

  return { props: {} };
}

export default Sitemap;
