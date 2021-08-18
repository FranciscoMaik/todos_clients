import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #1a1a1a;
  align-items: center;
  justify-content: space-between;
  padding: 0px 76px;

  @media (max-width: 360px) {
    padding: 0px 26px;
  }
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 500;
  line-height: 2.109rem;
`;

export const ContainerItens = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-between;

  @media (max-width: 1177px) {
    width: 15%;
  }

  @media (max-width: 818px) {
    width: 20%;
  }

  @media (max-width: 654px) {
    flex-direction: column;
  }

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Itens = styled(Link)`
  color: #ffffff;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.641rem;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 654px) {
    padding: 6px;
  }

  @media (max-width: 360px) {
    padding: 6px;
  }

  :hover {
    color: ${shade(0.2, '#000000')};
    background-color: ${(shade(0.1), '#ffffff')};
  }
`;
