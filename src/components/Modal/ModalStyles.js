import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #0f1624;
  max-width: 700px;
  width: 90%;
  border-radius: 12px;
  padding: 2rem;
  color: #fff;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
`;
