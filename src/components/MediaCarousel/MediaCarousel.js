import React, { useState, useEffect } from "react";
import { FiMaximize2 } from "react-icons/fi";
import {
  Carousel,
  Wrapper,
  MediaWrapper,
  HoverOverlay,
  ExpandIcon,
  Slide,
  MediaImage,
  MediaVideo,
  Indicators,
  Dot,
  Control,
  ControlIcon,
  FullscreenOverlay,
  FullscreenContent,
  CloseButton,
} from "./MediaCarouselStyles";

const MediaCarousel = ({ media = [] }) => {
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  if (!media.length) return null;

  const prev = () =>
    setActive((prev) => (prev === 0 ? media.length - 1 : prev - 1));

  const next = () =>
    setActive((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  /* 🔑 Cerrar fullscreen con ESC */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setFullscreen(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <Carousel>
        <Wrapper>
{media.map((item, i) => (
  <Slide key={i} active={i === active}>
    <MediaWrapper onClick={() => setFullscreen(item)}>
      {item.type === "image" && (
        <MediaImage src={item.src} alt="" />
      )}

      {item.type === "video" && (
        <MediaVideo controls preload="metadata">
          <source src={item.src} type="video/mp4" />
        </MediaVideo>
      )}

      <HoverOverlay className="overlay">
        <ExpandIcon>
          <FiMaximize2 />
        </ExpandIcon>
      </HoverOverlay>
    </MediaWrapper>
  </Slide>
))}
        </Wrapper>

        {/* Controls */}
        <Control left onClick={prev} aria-label="Previous slide">
          <ControlIcon>‹</ControlIcon>
        </Control>

        <Control right onClick={next} aria-label="Next slide">
          <ControlIcon>›</ControlIcon>
        </Control>

        {/* Indicators */}
        <Indicators>
          {media.map((_, i) => (
            <Dot
              key={i}
              active={i === active}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </Indicators>
      </Carousel>

      {/* 🖥️ Fullscreen Modal */}
      {fullscreen && (
        <FullscreenOverlay onClick={() => setFullscreen(null)}>
          <FullscreenContent onClick={(e) => e.stopPropagation()}>
            {fullscreen.type === "image" && (
              <img src={fullscreen.src} alt="" />
            )}

            {fullscreen.type === "video" && (
              <video controls autoPlay>
                <source src={fullscreen.src} type="video/mp4" />
              </video>
            )}

            <CloseButton onClick={() => setFullscreen(null)}>
              ✕
            </CloseButton>
          </FullscreenContent>
        </FullscreenOverlay>
      )}
    </>
  );
};

export default MediaCarousel;
