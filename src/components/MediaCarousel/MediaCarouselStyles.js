import styled, { css } from "styled-components";

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem 0;
`;

export const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: zoom-in;

  &:hover .overlay {
    opacity: 1;
  }
`;

export const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const ExpandIcon = styled.div`
  font-size: 3rem;
  color: white;
  opacity: 0.9;
`;



export const Wrapper = styled.div`
  position: relative;
  height: 14rem;
  overflow: hidden;
  border-radius: 14px;

  @media (min-width: 768px) {
    height: 24rem;
  }
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: scale(1);
      z-index: 10;
    `}
`;

export const MediaImage = styled.img`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* Indicators */
export const Indicators = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.6rem;
  z-index: 20;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ active }) =>
    active ? "white" : "rgba(255,255,255,0.4)"};
`;

/* Controls */
export const Control = styled.button`
  position: absolute;
  top: 0;
  ${({ left }) => left && "left: 0"};
  ${({ right }) => right && "right: 0"};
  height: 100%;
  padding: 0 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
`;

export const ControlIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullscreenContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 70vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 14px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    transition: all 0.25s ease;
    cursor: zoom-out;
  }

  /* 🖥 Desktop grande */
  @media (min-width: 1200px) {
    img,
    video {
      width: 60vw;
      max-height: 80vh;
    }
    @media (hover: hover) {
  img:hover,
  video:hover {
    transform: scale(1.01);
  }
}

  }

  /* 📲 Tablet */
  @media (max-width: 1024px) {
    img,
    video {
      width: 80vw;
      max-height: 75vh;
      border-radius: 12px;
    }
  }

  /* 📱 Mobile */
  @media (max-width: 640px) {
    img,
    video {
      width: 92vw;
      max-height: 70vh;
      border-radius: 10px;
    }
  }

  /* 📱 Mobile pequeño */
  @media (max-width: 420px) {
    img,
    video {
      width: 96vw;
      max-height: 65vh;
      border-radius: 8px;
    }
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: -48px;
  right: 0;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
