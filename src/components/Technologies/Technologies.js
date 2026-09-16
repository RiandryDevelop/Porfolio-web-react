import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiGithubactions,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si';
// Simple Icons dropped every Microsoft brand mark, so Azure and SQL Server
// fall back to Tabler, whose line weight matches the rest of the set.
import { TbBrandAzure, TbDatabase } from 'react-icons/tb';

import { cardVariants, inView, stagger } from '../../styles/animations/variants';
import {
  Container,
  Eyebrow,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Chip, Chips, Group, GroupHead, Groups } from './TechnologiesStyles';

/*
 * Brand marks come from Simple Icons, so each tool shows its own logo. The old
 * version reused Devicons and ended up labelling .NET with a magazine glyph and
 * UI/UX with the Zend Framework mark.
 */
const GROUPS = [
  {
    key: 'frontend',
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'Angular', Icon: SiAngular },
      { label: 'Vue 3', Icon: SiVuedotjs },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'Tailwind', Icon: SiTailwindcss },
    ],
  },
  {
    key: 'backend',
    items: [
      { label: '.NET', Icon: SiDotnet },
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'Python', Icon: SiPython },
      { label: 'SQL Server', Icon: TbDatabase },
      { label: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    key: 'mobile',
    items: [
      { label: 'Flutter', Icon: SiFlutter },
      { label: 'Kotlin', Icon: SiKotlin },
      { label: 'React Native', Icon: SiReact },
    ],
  },
  {
    key: 'cloud',
    items: [
      { label: 'Azure', Icon: TbBrandAzure },
      { label: 'Docker', Icon: SiDocker },
      { label: 'GitHub Actions', Icon: SiGithubactions },
      { label: 'Vercel', Icon: SiVercel },
    ],
  },
];

const Technologies = () => {
  const { t } = useTranslation('common');

  return (
    <Section id="stack" $tight>
      <Container>
        <SectionHeader>
          <Eyebrow>{t('stack.eyebrow')}</Eyebrow>
          <SectionTitle>{t('stack.title')}</SectionTitle>
          <SectionLead>{t('stack.lead')}</SectionLead>
        </SectionHeader>

        <Groups
          as={motion.div}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {GROUPS.map(({ key, items }) => (
            <Group key={key} as={motion.section} variants={cardVariants}>
              <GroupHead>
                <h3>{t(`stack.groups.${key}.title`)}</h3>
                <p>{t(`stack.groups.${key}.text`)}</p>
              </GroupHead>

              <Chips>
                {items.map(({ label, Icon }) => (
                  <Chip key={label}>
                    <Icon size={14} aria-hidden="true" />
                    {label}
                  </Chip>
                ))}
              </Chips>
            </Group>
          ))}
        </Groups>
      </Container>
    </Section>
  );
};

export default Technologies;
