import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import { LuChevronLeft, LuChevronRight, LuMaximize2, LuX } from 'react-icons/lu';

import {
  Caption,
  CloseButton,
  Control,
  Dot,
  Dots,
  ExpandButton,
  Figure,
  Frame,
  Overlay,
  OverlayContent,
  Pending,
  Slide,
} from './MediaCarouselStyles';

const MediaCarousel = ({ media = [], title = '' }) => {
  const { t } = useTranslation('common');

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const count = media.length;

  const prev = useCallback(
    () => setActive((i) => (i === 0 ? count - 1 : i - 1)),
    [count]
  );
  const next = useCallback(
    () => setActive((i) => (i === count - 1 ? 0 : i + 1)),
    [count]
  );

  /*
   * Hooks run before the empty-media early return below — the previous version
   * bailed out first, which changed the hook count between renders.
   */
  useEffect(() => {
    if (!count) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (lightbox) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [count, lightbox, prev, next]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightbox]);

  if (!count) {
    return <Pending>{t('caseStudies.mediaPending')}</Pending>;
  }

  const current = media[active];

  return (
    <>
      <Figure>
        <Frame>
          {media.map((item, i) => (
            <Slide key={item.src} $active={i === active} aria-hidden={i !== active}>
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={t('caseStudies.mediaAlt', { title, index: i + 1 })}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  width={item.width}
                  height={item.height}
                />
              ) : (
                <video controls preload="none" poster={item.poster} playsInline>
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </Slide>
          ))}

          <ExpandButton
            type="button"
            onClick={() => setLightbox(current)}
            aria-label={t('caseStudies.expand')}
          >
            <LuMaximize2 size={16} aria-hidden="true" />
          </ExpandButton>

          {count > 1 && (
            <>
              <Control
                type="button"
                $side="left"
                onClick={prev}
                aria-label={t('caseStudies.prevSlide')}
              >
                <LuChevronLeft size={20} aria-hidden="true" />
              </Control>
              <Control
                type="button"
                $side="right"
                onClick={next}
                aria-label={t('caseStudies.nextSlide')}
              >
                <LuChevronRight size={20} aria-hidden="true" />
              </Control>
            </>
          )}
        </Frame>

        <Caption>
          <span aria-live="polite">
            {active + 1} / {count}
          </span>

          {count > 1 && (
            <Dots role="tablist">
              {media.map((item, i) => (
                <Dot
                  key={item.src}
                  type="button"
                  role="tab"
                  $active={i === active}
                  aria-selected={i === active}
                  aria-label={t('caseStudies.goToSlide', { index: i + 1 })}
                  onClick={() => setActive(i)}
                />
              ))}
            </Dots>
          )}
        </Caption>
      </Figure>

      {lightbox && (
        <Overlay
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setLightbox(null)}
        >
          <OverlayContent onClick={(e) => e.stopPropagation()}>
            <CloseButton type="button" onClick={() => setLightbox(null)}>
              <LuX size={14} aria-hidden="true" />
              Esc
            </CloseButton>

            {lightbox.type === 'image' ? (
              <img src={lightbox.src} alt={title} />
            ) : (
              <video controls autoPlay playsInline>
                <source src={lightbox.src} type="video/mp4" />
              </video>
            )}
          </OverlayContent>
        </Overlay>
      )}
    </>
  );
};

export default MediaCarousel;
