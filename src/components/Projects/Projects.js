import { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import { LuArrowUpRight, LuSearch, LuX } from 'react-icons/lu';

import { projects } from '../../constants/constants';
import { useSearch } from '../../context/SearchContext';
import { useDebounce } from '../../hooks/useDebounce';
import highlightText from '../../hooks/highlightText';
import { cardVariants, inView, stagger } from '../../styles/animations/variants';
import Button from '../../styles/GlobalComponents/Button';
import {
  Container,
  Eyebrow,
  Section,
  SectionLead,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  Card,
  CardBody,
  CardMedia,
  CardMeta,
  CardSummary,
  CardTag,
  CardTags,
  CardTitle,
  ClearButton,
  EmptyState,
  Grid,
  HeaderArea,
  HeaderCopy,
  MediaFallback,
  ResultCount,
  SearchField,
  SearchHint,
  SearchInput,
  SearchWrapper,
} from './ProjectsStyles';

const Projects = () => {
  const { t } = useTranslation('common');
  const { query, setQuery } = useSearch();
  const debouncedQuery = useDebounce(query, 250);

  const router = useRouter();
  const searchRef = useRef(null);
  const hydratedFromUrl = useRef(false);

  // Seed the box from ?q= once, so a shared link opens on the same results.
  useEffect(() => {
    if (hydratedFromUrl.current || !router.isReady) return;
    hydratedFromUrl.current = true;

    const fromUrl = typeof router.query.q === 'string' ? router.query.q : '';
    if (fromUrl) {
      setQuery(fromUrl);
      searchRef.current?.focus();
    }
  }, [router.isReady, router.query.q, setQuery]);

  // Mirror the *settled* query back into the URL. Doing this per keystroke
  // rewrote history on every character.
  useEffect(() => {
    if (!hydratedFromUrl.current) return;

    const search = debouncedQuery.trim();
    const current = typeof router.query.q === 'string' ? router.query.q : '';
    if (search === current) return;

    router.replace(
      { pathname: router.pathname, query: search ? { q: search } : {} },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [debouncedQuery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      const isTyping = tag === 'INPUT' || tag === 'TEXTAREA';

      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        searchRef.current?.focus();
      }

      if (e.key === 'Escape' && isTyping) {
        setQuery('');
        searchRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setQuery]);

  // Filter on the debounced value so typing does not re-run this per keystroke.
  const filtered = useMemo(() => {
    const term = debouncedQuery.trim().toLowerCase();
    if (!term) return projects;

    return projects.filter((project) => {
      const haystack = [
        t(`projects.items.${project.slug}.title`),
        t(`projects.items.${project.slug}.summary`),
        t(`projects.items.${project.slug}.problem`),
        project.tags.join(' '),
        project.kind,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(term);
    });
  }, [debouncedQuery, t]);

  const isSearching = debouncedQuery.trim() !== '';

  return (
    <Section id="work">
      <Container>
        <HeaderArea>
          <HeaderCopy>
            <Eyebrow>{t('work.eyebrow')}</Eyebrow>
            <SectionTitle>{t('work.title')}</SectionTitle>
            <SectionLead>{t('work.lead')}</SectionLead>
          </HeaderCopy>

          <SearchWrapper>
            <SearchField>
              <LuSearch size={18} aria-hidden="true" />
              <SearchInput
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('work.searchPlaceholder')}
                aria-label={t('work.searchPlaceholder')}
              />
              {query && (
                <ClearButton
                  type="button"
                  onClick={() => {
                    setQuery('');
                    searchRef.current?.focus();
                  }}
                  aria-label={t('work.clearSearch')}
                >
                  <LuX size={16} aria-hidden="true" />
                </ClearButton>
              )}
            </SearchField>

            <SearchHint>
              <kbd>/</kbd> {t('work.hintSearch')}
              <kbd>Esc</kbd> {t('work.hintClear')}
            </SearchHint>
          </SearchWrapper>
        </HeaderArea>

        {/* Announced politely so screen readers hear the result count change. */}
        <ResultCount role="status" aria-live="polite">
          {isSearching
            ? t('work.resultCount', { count: filtered.length, query: debouncedQuery })
            : t('work.totalCount', { count: projects.length })}
        </ResultCount>

        {filtered.length === 0 ? (
          <EmptyState>
            <p>
              {t('work.noResults')} <strong>&ldquo;{debouncedQuery}&rdquo;</strong>
            </p>
            <Button type="button" $variant="secondary" $size="sm" onClick={() => setQuery('')}>
              {t('work.clearSearch')}
            </Button>
          </EmptyState>
        ) : (
          <Grid
            as={motion.div}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            {filtered.map((project, index) => {
              const title = t(`projects.items.${project.slug}.title`);
              const summary = t(`projects.items.${project.slug}.summary`);
              const cover = project.media?.find((m) => m.type === 'image');

              return (
                <motion.div key={project.slug} variants={cardVariants}>
                  <Card as={Link} href={`/case-studies/${project.slug}`}>
                      <CardMedia $portrait={cover?.portrait} $src={cover?.src}>
                        {cover ? (
                          <img
                            src={cover.src}
                            alt=""
                            loading={index < 2 ? 'eager' : 'lazy'}
                            decoding="async"
                            width={cover.width}
                            height={cover.height}
                          />
                        ) : (
                          <MediaFallback>{t('work.mediaPending')}</MediaFallback>
                        )}
                      </CardMedia>

                      <CardBody>
                        <CardMeta>
                          <span>{project.year}</span>
                          <span>{t(`work.kinds.${project.kind}`)}</span>
                        </CardMeta>

                        <CardTitle>
                          {highlightText(title, debouncedQuery)}
                          <LuArrowUpRight size={20} aria-hidden="true" />
                        </CardTitle>

                        <CardSummary>
                          {highlightText(summary, debouncedQuery)}
                        </CardSummary>

                        <CardTags>
                          {project.tags.slice(0, 5).map((tag) => (
                            <CardTag key={tag}>
                              {highlightText(tag, debouncedQuery)}
                            </CardTag>
                          ))}
                        </CardTags>
                      </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </Grid>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
