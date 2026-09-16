import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import {
  LuArrowLeft,
  LuArrowRight,
  LuExternalLink,
  LuGithub,
  LuSmartphone,
} from 'react-icons/lu';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import MediaCarousel from '../../components/MediaCarousel/MediaCarousel';
import Seo from '../../components/SEO/Seo';
import { projects } from '../../constants/constants';
import { site } from '../../constants/site';
import { Layout } from '../../layout/Layout';
import Button from '../../styles/GlobalComponents/Button';
import {
  ButtonStack,
  CaseStudyHeader,
  CaseStudyMeta,
  CaseStudyWrapper,
  ContentGrid,
  CTASection,
  Eyebrow,
  InfoBlock,
  NavLink,
  NavWrapper,
  SectionLead,
  SectionTitle,
  Sidebar,
  SidebarBlock,
  SidebarTitle,
  Tag,
  TagList,
} from '../../styles/GlobalComponents';

const CaseStudyPage = ({ project, prev, next }) => {
  const { t } = useTranslation('common');

  const { slug } = project;
  const title = t(`projects.items.${slug}.title`);
  const summary = t(`projects.items.${slug}.summary`);
  const cover = project.media?.find((m) => m.type === 'image');

  // Primary action first, source last; each project declares only what it has.
  const links = [
    { key: 'visitSite', href: project.links?.live, Icon: LuExternalLink, variant: 'primary' },
    { key: 'viewStore', href: project.links?.store, Icon: LuSmartphone, variant: 'primary' },
    { key: 'viewSource', href: project.links?.source, Icon: LuGithub, variant: 'secondary' },
  ].filter((link) => Boolean(link.href));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: summary,
    image: cover ? `${site.url}${cover.src}` : undefined,
    dateCreated: project.year,
    keywords: project.tags.join(', '),
    author: { '@type': 'Person', name: site.name, url: site.url },
    url: `${site.url}/case-studies/${slug}`,
  };

  return (
    <Layout>
      <Seo
        title={title}
        description={summary}
        image={cover?.src}
        type="article"
        jsonLd={jsonLd}
      />

      <CaseStudyWrapper>
        <Breadcrumbs
          items={[
            { label: t('seo.home'), href: '/' },
            { label: t('work.title'), href: '/#work' },
            { label: title },
          ]}
        />

        <CaseStudyHeader>
          <Eyebrow>{t(`work.kinds.${project.kind}`)}</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
          <SectionLead>{summary}</SectionLead>
        </CaseStudyHeader>

        <CaseStudyMeta>
          <div>
            <dt>{t('caseStudies.year')}</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>{t('caseStudies.role')}</dt>
            <dd>{t(`projects.items.${slug}.role`)}</dd>
          </div>
          <div>
            <dt>{t('caseStudies.type')}</dt>
            <dd>{t(`work.kinds.${project.kind}`)}</dd>
          </div>
        </CaseStudyMeta>

        <MediaCarousel media={project.media} title={title} />

        <ContentGrid>
          <div>
            <InfoBlock>
              <h3>{t('caseStudies.problem')}</h3>
              <p>{t(`projects.items.${slug}.problem`)}</p>
            </InfoBlock>

            <InfoBlock>
              <h3>{t('caseStudies.solution')}</h3>
              <p>{t(`projects.items.${slug}.solution`)}</p>
            </InfoBlock>

            <InfoBlock>
              <h3>{t('caseStudies.result')}</h3>
              <p>{t(`projects.items.${slug}.result`)}</p>
            </InfoBlock>
          </div>

          <Sidebar>
            <SidebarBlock>
              <SidebarTitle>{t('caseStudies.stack')}</SidebarTitle>
              <TagList>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </SidebarBlock>

            {links.length > 0 && (
              <SidebarBlock>
                <SidebarTitle>{t('caseStudies.links')}</SidebarTitle>
                <ButtonStack>
                  {links.map(({ key, href, Icon, variant }) => (
                    <Button
                      key={key}
                      as="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      $variant={variant}
                      $size="sm"
                      $full
                    >
                      <Icon aria-hidden="true" />
                      {t(`caseStudies.${key}`)}
                    </Button>
                  ))}
                </ButtonStack>
              </SidebarBlock>
            )}
          </Sidebar>
        </ContentGrid>

        <CTASection>
          <SectionTitle as="h2">{t('caseStudies.ctaTitle')}</SectionTitle>
          <SectionLead as="p">{t('caseStudies.ctaLead')}</SectionLead>
          <Button
            as="a"
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              `${t('caseStudies.ctaSubject')} ${title}`
            )}`}
            $variant="primary"
          >
            {t('caseStudies.ctaSimilar')}
            <LuArrowRight aria-hidden="true" />
          </Button>
        </CTASection>

        <NavWrapper aria-label={t('caseStudies.pagination')}>
          {prev ? (
            <NavLink as={Link} href={`/case-studies/${prev.slug}`}>
              <span>
                <LuArrowLeft size={12} aria-hidden="true" /> {t('caseStudies.prev')}
              </span>
              <strong>{t(`projects.items.${prev.slug}.title`)}</strong>
            </NavLink>
          ) : (
            <span />
          )}

          {next && (
            <NavLink as={Link} href={`/case-studies/${next.slug}`} $align="end">
              <span>
                {t('caseStudies.next')} <LuArrowRight size={12} aria-hidden="true" />
              </span>
              <strong>{t(`projects.items.${next.slug}.title`)}</strong>
            </NavLink>
          )}
        </NavWrapper>
      </CaseStudyWrapper>
    </Layout>
  );
};

export default CaseStudyPage;

export async function getStaticPaths({ locales }) {
  const paths = [];

  projects.forEach((project) => {
    locales.forEach((locale) => {
      paths.push({ params: { slug: project.slug }, locale });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const index = projects.findIndex((p) => p.slug === params.slug);

  if (index === -1) return { notFound: true };

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      project: projects[index],
      prev: projects[index - 1] || null,
      next: projects[index + 1] || null,
    },
  };
}
