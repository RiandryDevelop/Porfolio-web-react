import styled from 'styled-components';

/*
 * Full-height column so the footer sits at the bottom on short pages.
 * The old wrapper capped width at 1280px here, which stopped sections from
 * ever running edge to edge; width is now owned by `Container` instead.
 */
export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;
