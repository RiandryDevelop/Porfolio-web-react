import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import { useTranslation } from 'next-i18next/pages';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Seo from '../components/SEO/Seo';
import Services from '../components/Services/Services';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Seo description={t('seo.defaultDescription')} />
      <Hero />
      <Projects />
      <Services />
      <Technologies />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
