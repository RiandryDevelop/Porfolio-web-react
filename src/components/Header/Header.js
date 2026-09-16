import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next/pages';
import { LuGithub, LuLinkedin, LuMenu, LuX } from 'react-icons/lu';

import { navSections, socials, site } from '../../constants/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import Button from '../../styles/GlobalComponents/Button';
import { VisuallyHidden } from '../../styles/GlobalComponents';
import Monogram from './Monogram';
import {
  Actions,
  Bar,
  Drawer,
  DrawerFooter,
  DrawerHead,
  DrawerLink,
  DrawerNav,
  DrawerSocials,
  IconLink,
  Inner,
  LangButton,
  LangSwitcher,
  Logo,
  MenuToggle,
  Nav,
  NavLink,
} from './HeaderStyles';

const SECTION_IDS = navSections.map((s) => s.id);

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, asPath, pathname } = router;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  // Sections only exist on the home page; elsewhere the links point back to it.
  const isHome = pathname === '/';
  const hrefFor = (id) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation, and lock the page behind it while it is up.
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    router.events.on('hashChangeStart', close);
    return () => {
      router.events.off('routeChangeStart', close);
      router.events.off('hashChangeStart', close);
    };
  }, [router.events]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const changeLanguage = useCallback(
    (lng) => {
      router.push(asPath, asPath, { locale: lng, scroll: false });
    },
    [router, asPath]
  );

  const langSwitcher = (
    <LangSwitcher role="group" aria-label={t('nav.language')}>
      {['es', 'en'].map((lng) => (
        <LangButton
          key={lng}
          type="button"
          $active={locale === lng}
          aria-pressed={locale === lng}
          onClick={() => changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </LangButton>
      ))}
    </LangSwitcher>
  );

  return (
    <>
      <Bar $scrolled={scrolled}>
        <Inner>
          <Logo as={Link} href="/">
            <Monogram />
            <span>{site.name}</span>
          </Logo>

          <Nav aria-label={t('nav.primary')}>
            {navSections.map((section) => (
              <NavLink
                key={section.id}
                href={hrefFor(section.id)}
                $active={isHome && activeSection === section.id}
                aria-current={
                  isHome && activeSection === section.id ? 'true' : undefined
                }
              >
                {t(section.labelKey)}
              </NavLink>
            ))}
          </Nav>

          <Actions>
            <IconLink
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              $hideOnMobile
            >
              <LuGithub size={20} />
            </IconLink>
            <IconLink
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              $hideOnMobile
            >
              <LuLinkedin size={20} />
            </IconLink>

            {langSwitcher}

            <MenuToggle
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <LuMenu size={20} />
              <VisuallyHidden>{t('nav.openMenu')}</VisuallyHidden>
            </MenuToggle>
          </Actions>
        </Inner>
      </Bar>

      <Drawer id="mobile-menu" $open={open} aria-hidden={!open}>
        <DrawerHead>
          <Logo as="span">
            <Monogram />
            <span>{site.name}</span>
          </Logo>
          <MenuToggle type="button" onClick={() => setOpen(false)}>
            <LuX size={20} />
            <VisuallyHidden>{t('nav.closeMenu')}</VisuallyHidden>
          </MenuToggle>
        </DrawerHead>

        <DrawerNav aria-label={t('nav.primary')}>
          {navSections.map((section, i) => (
            <DrawerLink
              key={section.id}
              href={hrefFor(section.id)}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <small>{String(i + 1).padStart(2, '0')}</small>
              {t(section.labelKey)}
            </DrawerLink>
          ))}
        </DrawerNav>

        <DrawerFooter>
          <Button
            as="a"
            href={`mailto:${site.email}`}
            $variant="primary"
            $full
            tabIndex={open ? 0 : -1}
          >
            {t('contact.cta')}
          </Button>

          <DrawerSocials>
            <IconLink
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              tabIndex={open ? 0 : -1}
            >
              <LuGithub size={20} />
            </IconLink>
            <IconLink
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              tabIndex={open ? 0 : -1}
            >
              <LuLinkedin size={20} />
            </IconLink>
          </DrawerSocials>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

export default Header;
