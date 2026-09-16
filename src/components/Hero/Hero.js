import { useTranslation } from 'next-i18next/pages';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { LuArrowRight, LuDownload } from 'react-icons/lu';

import { cvByLocale, site } from '../../constants/site';
import Button from '../../styles/GlobalComponents/Button';
import { Eyebrow } from '../../styles/GlobalComponents';
import { fadeUp, stagger } from '../../styles/animations/variants';
import {
  Availability,
  Backdrop,
  Ctas,
  Fact,
  Facts,
  HeroSection,
  Inner,
  Lead,
  Title,
} from './HeroStyles';

const FACT_KEYS = ['experience', 'shipped', 'stack'];

const Hero = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  const cvHref = cvByLocale[locale] || cvByLocale.es;

  return (
    <HeroSection>
      <Backdrop aria-hidden="true" />
      <Inner as={motion.div} variants={stagger} initial="hidden" animate="visible">
        <Availability as={motion.p} variants={fadeUp}>
          {t('hero.availability')}
        </Availability>

        <motion.div variants={fadeUp}>
          <Eyebrow>
            {site.role} · {site.location}
          </Eyebrow>
        </motion.div>

        <Title as={motion.h1} variants={fadeUp}>
          {t('hero.titleLead')} <em>{t('hero.titleAccent')}</em>
        </Title>

        <Lead as={motion.p} variants={fadeUp}>
          {t('hero.subtitle')}
        </Lead>

        <Ctas as={motion.div} variants={fadeUp}>
          <Button as="a" href="#work" $variant="primary">
            {t('hero.ctaProjects')}
            <LuArrowRight aria-hidden="true" />
          </Button>

          <Button
            as="a"
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            $variant="secondary"
          >
            <LuDownload aria-hidden="true" />
            {t('hero.ctaCV')}
          </Button>
        </Ctas>

        <Facts as={motion.dl} variants={fadeUp}>
          {FACT_KEYS.map((key) => (
            <Fact key={key}>
              <dt>{t(`hero.facts.${key}.value`)}</dt>
              <dd>{t(`hero.facts.${key}.label`)}</dd>
            </Fact>
          ))}
        </Facts>
      </Inner>
    </HeroSection>
  );
};

export default Hero;
