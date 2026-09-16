import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';
import { LuArrowUp, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

import { navSections, site, socials } from '../../constants/site';
import Monogram from '../Header/Monogram';
import { BackToTop, Bottom, Brand, Column, Inner, Top, Wrapper } from './FooterStyles';

const Footer = () => {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <Inner>
        <Top>
          <Brand>
            <Link href="/">
              <Monogram size={24} />
              <span>{site.name}</span>
            </Link>
            <p>{t('footer.slogan')}</p>
          </Brand>

          <Column aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title">{t('footer.navTitle')}</h2>
            <ul>
              {navSections.map((section) => (
                <li key={section.id}>
                  <a href={`/#${section.id}`}>{t(section.labelKey)}</a>
                </li>
              ))}
            </ul>
          </Column>

          <Column aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title">{t('footer.contactTitle')}</h2>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>
                  <LuMail size={15} aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={socials.github} target="_blank" rel="noopener noreferrer">
                  <LuGithub size={15} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <LuLinkedin size={15} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </Column>
        </Top>

        <Bottom>
          <p>
            © {year} {site.name}. {t('footer.rights')}
          </p>
          <BackToTop href="#top">
            {t('footer.backToTop')}
            <LuArrowUp size={14} aria-hidden="true" />
          </BackToTop>
        </Bottom>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
