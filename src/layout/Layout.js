import { useTranslation } from 'next-i18next/pages';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Main, Shell } from './LayoutStyles';

export const Layout = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <Shell id="top">
      <a className="skip-link" href="#main">
        {t('nav.skipToContent')}
      </a>
      <Header />
      <Main id="main">{children}</Main>
      <Footer />
    </Shell>
  );
};

export default Layout;
