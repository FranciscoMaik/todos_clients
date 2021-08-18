import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 24px 76px;
  grid-row-gap: 24px;

  @media (max-width: 1273px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 24px;
  }

  @media (max-width: 901px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
  }

  @media (max-width: 627px) {
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
    padding: 24px 56px;
  }
`;
