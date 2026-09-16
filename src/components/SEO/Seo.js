import Head from 'next/head';
import { useRouter } from 'next/router';

import { site, socials } from '../../constants/site';

const absolute = (path) => {
  if (!path) return `${site.url}${site.ogImage}`;
  return path.startsWith('http') ? path : `${site.url}${path}`;
};

/**
 * Shared document head. Builds canonical and hreflang from the live route, so
 * nothing has to hardcode a domain the way the old component did.
 */
const Seo = ({ title, description, image, type = 'website', jsonLd }) => {
  const { asPath, locale, locales = [], defaultLocale } = useRouter();

  // Strip the query string: ?q=... variants should not become canonical URLs.
  const path = asPath.split('?')[0].split('#')[0];
  const cleanPath = path === '/' ? '' : path;

  const localePath = (lng) =>
    lng === defaultLocale ? `${site.url}${cleanPath}` : `${site.url}/${lng}${cleanPath}`;

  const canonical = localePath(locale);
  const ogImage = absolute(image);
  const fullTitle = title ? `${title} | ${site.name}` : `${site.role} | ${site.name}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [socials.github, socials.linkedin],
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {locales.map((lng) => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={localePath(lng)}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localePath(defaultLocale)} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'es_ES'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd || defaultJsonLd),
        }}
      />
    </Head>
  );
};

export default Seo;
