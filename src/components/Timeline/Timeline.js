import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';

import { fadeUp, inView, stagger } from '../../styles/animations/variants';
import { Heading, Item, List, Text, Wrapper, Year } from './TimelineStyles';

const Timeline = () => {
  const { t } = useTranslation('common');

  // `returnObjects` gives the whole map, so adding a year is a locale-only edit.
  const items = t('about.timeline.items', { returnObjects: true }) || {};
  const entries = Object.entries(items).sort(([a], [b]) => b.localeCompare(a));
  const latest = entries[0]?.[0];

  return (
    <Wrapper>
      <Heading>{t('about.timeline.title')}</Heading>

      <List
        as={motion.ol}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
      >
        {entries.map(([year, text]) => (
          <Item
            key={year}
            as={motion.li}
            variants={fadeUp}
            $current={year === latest}
          >
            <Year $current={year === latest}>{year}</Year>
            <Text>{text}</Text>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Timeline;
