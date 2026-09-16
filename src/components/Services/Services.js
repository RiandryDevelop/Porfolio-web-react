import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import { LuCheck, LuCloud, LuServer, LuSmartphone, LuLayoutDashboard } from 'react-icons/lu';

import { cardVariants, inView, stagger } from '../../styles/animations/variants';
import {
  Container,
  Eyebrow,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Bullets, Card, CardIcon, CardText, CardTitle, Grid } from './ServicesStyles';

// Keys map to `services.items.<key>` in the locale files.
const SERVICES = [
  { key: 'product', Icon: LuLayoutDashboard, bullets: 3 },
  { key: 'api', Icon: LuServer, bullets: 3 },
  { key: 'mobile', Icon: LuSmartphone, bullets: 3 },
  { key: 'cloud', Icon: LuCloud, bullets: 3 },
];

const Services = () => {
  const { t } = useTranslation('common');

  return (
    <Section id="services" $tight>
      <Container>
        <SectionHeader>
          <Eyebrow>{t('services.eyebrow')}</Eyebrow>
          <SectionTitle>{t('services.title')}</SectionTitle>
          <SectionLead>{t('services.lead')}</SectionLead>
        </SectionHeader>

        <Grid
          as={motion.ul}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {SERVICES.map(({ key, Icon, bullets }) => (
            <Card key={key} as={motion.li} variants={cardVariants}>
              <CardIcon>
                <Icon size={20} aria-hidden="true" />
              </CardIcon>

              <CardTitle>{t(`services.items.${key}.title`)}</CardTitle>
              <CardText>{t(`services.items.${key}.text`)}</CardText>

              <Bullets>
                {Array.from({ length: bullets }, (_, i) => (
                  <li key={i}>
                    <LuCheck size={14} aria-hidden="true" />
                    {t(`services.items.${key}.bullets.${i}`)}
                  </li>
                ))}
              </Bullets>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
