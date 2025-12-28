import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
