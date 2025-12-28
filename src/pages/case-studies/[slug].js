import { useRouter } from "next/router";
import Link from "next/link";
import { projects } from "../../constants/constants";
import CaseStudySEO from "../../components/SEO/CaseStudySEO";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";


import { SectionTitle,
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
   Tag
 } from "../../styles/GlobalComponents";
import CTAButton from "../../styles/GlobalComponents/CTAButton";



const CaseStudyPage = ({ project, prev, next }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Case study not found</p>;
  }

  return (
    <CaseStudyWrapper>
      <CaseStudySEO
        title={project.title}
        description={project.result}
        image={project.image}
        slug={project.slug}
      />
    <Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/#projects" },
    { label: project.title },
  ]}
/>

        <SectionTitle main>{project.title}</SectionTitle>
         <HeroImage
    src={project.image}
    alt={project.title}
  />
          <ContentGrid>
    <div>
      <InfoBlock>
        <h3>Problema</h3>
        <p>{project.problem}</p>
      </InfoBlock>

      <InfoBlock>
        <h3>Solución</h3>
        <p>{project.solution}</p>
      </InfoBlock>

      <InfoBlock>
        <h3>Resultado</h3>
        <p>{project.result}</p>
      </InfoBlock>
    </div>

    <Sidebar>
      <SidebarTitle>Stack tecnológico</SidebarTitle>
      <TagList>
        {project.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </TagList>
    </Sidebar>
  </ContentGrid>

  <CTASection>
    <CTAButton
      href={`mailto:riandrydevsoffers@gmail.com?subject=Proyecto similar a ${project.title}`}
    >
      Quiero un proyecto similar
    </CTAButton>
  </CTASection>
      
<NavWrapper>
  {prev && (
    <Link href={`/case-studies/${prev.slug}`} passHref>
      <NavLink>← {prev.title}</NavLink>
    </Link>
  )}

  {next && (
    <Link href={`/case-studies/${next.slug}`} passHref>
      <NavLink>{next.title} →</NavLink>
    </Link>
  )}
</NavWrapper>
 </CaseStudyWrapper>
  );
};

export default CaseStudyPage;

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const index = projects.findIndex(
    (p) => p.slug === params.slug
  );

  const project = projects[index] || null;
  const prev = projects[index - 1] || null;
  const next = projects[index + 1] || null;

  return {
    props: {
      project,
      prev,
      next,
    },
  };
}

