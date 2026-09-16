import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import { LuBriefcase, LuGlobe, LuMapPin, LuTarget } from 'react-icons/lu';

import { site } from '../../constants/site';
import { fadeUp, inView, stagger } from '../../styles/animations/variants';
import {
  Container,
  Eyebrow,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Timeline from '../Timeline/Timeline';
import {
  Bio,
  Details,
  Layout,
  Portrait,
  PortraitFallback,
  ProfileCard,
  Stat,
  Stats,
} from './AboutStyles';

const BIO_PARAGRAPHS = ['p1', 'p2', 'p3'];
const STAT_KEYS = ['years', 'projects', 'collabs', 'certs'];

const PORTRAIT = { src: '/images/portrait.jpg', width: 864, height: 892 };

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Section id="about">
      <Container>
        <SectionHeader>
          <Eyebrow>{t('about.eyebrow')}</Eyebrow>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <SectionLead>{t('about.lead')}</SectionLead>
        </SectionHeader>

        <Layout
          as={motion.div}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <Bio as={motion.div} variants={fadeUp}>
            {BIO_PARAGRAPHS.map((key) => (
              <p key={key}>{t(`about.bio.${key}`)}</p>
            ))}
          </Bio>

          <ProfileCard as={motion.aside} variants={fadeUp}>
            <Portrait>
              {PORTRAIT ? (
                <img
                  src={PORTRAIT.src}
                  alt={`${site.name}, ${site.role}`}
                  width={PORTRAIT.width}
                  height={PORTRAIT.height}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <PortraitFallback aria-hidden="true">RC</PortraitFallback>
              )}
            </Portrait>

            <Details>
              <div>
                <dt>
                  <LuMapPin size={13} aria-hidden="true" />
                  {t('about.details.location')}
                </dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>
                  <LuBriefcase size={13} aria-hidden="true" />
                  {t('about.details.availability')}
                </dt>
                <dd>{t('about.details.availabilityValue')}</dd>
              </div>
              <div>
                <dt>
                  <LuGlobe size={13} aria-hidden="true" />
                  {t('about.details.languages')}
                </dt>
                <dd>{t('about.details.languagesValue')}</dd>
              </div>
              <div>
                <dt>
                  <LuTarget size={13} aria-hidden="true" />
                  {t('about.details.focus')}
                </dt>
                <dd>{t('about.details.focusValue')}</dd>
              </div>
            </Details>
          </ProfileCard>
        </Layout>

        <Stats
          as={motion.dl}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {STAT_KEYS.map((key) => (
            <Stat key={key} as={motion.div} variants={fadeUp}>
              <dt>{t(`about.stats.${key}.value`)}</dt>
              <dd>{t(`about.stats.${key}.label`)}</dd>
            </Stat>
          ))}
        </Stats>

        <Timeline />
      </Container>
    </Section>
  );
};

export default About;
