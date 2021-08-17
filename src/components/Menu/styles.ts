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
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  line-height: 21.09px;
`;

export const ContainerItens = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-between;
`;

export const Itens = styled(Link)`
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  text-decoration: none;

  :hover {
    color: ${shade(0.2, '#ffffff')};
  }
`;
