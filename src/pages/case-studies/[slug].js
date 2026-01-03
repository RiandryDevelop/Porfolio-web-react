import { useRouter } from "next/router";
import Link from "next/link";
import { projects } from "../../constants/constants";
import CaseStudySEO from "../../components/SEO/CaseStudySEO";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MediaCarousel from "../../components/MediaCarousel/MediaCarousel";



import {
  SectionTitle,
  CaseStudyWrapper,
  HeroImage,
  ContentGrid,
  InfoBlock,
  Sidebar,
  SidebarTitle,
  CTASection,
  NavWrapper,
  NavLink,
  TagList,
  Tag,
} from "../../styles/GlobalComponents";
import CTAButton from "../../styles/GlobalComponents/CTAButton";

const CaseStudyPage = ({ project, prev, next }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  if (router.isFallback) {
    return <p>{t("caseStudies.loading")}</p>;
  }

  if (!project) {
    return <p>{t("caseStudies.noResults")}</p>;
  }

  const { slug } = project;

  const title = t(`Projects.items.${slug}.title`);
  const problem = t(`Projects.items.${slug}.problem`);
  const solution = t(`Projects.items.${slug}.solution`);
  const result = t(`Projects.items.${slug}.result`);

  return (
    <CaseStudyWrapper>
      <CaseStudySEO
        title={title}
        description={result}
        image={project.image}
        slug={slug}
      />

      <Breadcrumbs
        items={[
          { label: t("seo.home"), href: "/" },
          { label: t("caseStudies.title"), href: "/#projects" },
          { label: title },
        ]}
      />

      <SectionTitle main>{title}</SectionTitle>

      <HeroImage src={project.image} alt={title} />
      <MediaCarousel media={project.media} />

      

      <ContentGrid>
        <div>
          <InfoBlock>
            <h3>{t("caseStudies.problem")}</h3>
            <p>{problem}</p>
          </InfoBlock>

          <InfoBlock>
            <h3>{t("caseStudies.solution")}</h3>
            <p>{solution}</p>
          </InfoBlock>

          <InfoBlock>
            <h3>{t("caseStudies.result")}</h3>
            <p>{result}</p>
          </InfoBlock>
        </div>

        <Sidebar>
          <SidebarTitle>{t("caseStudies.stack")}</SidebarTitle>
          <TagList>
            {project.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </Sidebar>
      </ContentGrid>

      <CTASection>
        <CTAButton
          href={`mailto:riandrydevsoffers@gmail.com?subject=Proyecto similar a ${title}`}
        >
          {t("caseStudies.ctaSimilar")}
        </CTAButton>
      </CTASection>

      <NavWrapper>
        {prev && (
          <Link href={`/case-studies/${prev.slug}`} passHref>
            <NavLink>
              ← {t(`Projects.items.${prev.slug}.title`)}
            </NavLink>
          </Link>
        )}

        {next && (
          <Link href={`/case-studies/${next.slug}`} passHref>
            <NavLink>
              {t(`Projects.items.${next.slug}.title`)} →
            </NavLink>
          </Link>
        )}
      </NavWrapper>
    </CaseStudyWrapper>
  );
};

export default CaseStudyPage;

export async function getStaticPaths({ locales }) {
  const paths = [];

  projects.forEach((project) => {
    locales.forEach((locale) => {
      paths.push({
        params: { slug: project.slug },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const index = projects.findIndex(
    (p) => p.slug === params.slug
  );

  const project = projects[index] || null;
  const prev = projects[index - 1] || null;
  const next = projects[index + 1] || null;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      project,
      prev,
      next,
    },
  };
}
