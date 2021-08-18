import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 18px 16px;
  background-color: #242424;
  max-width: 264px;
  border-radius: 5px;

  @media (max-width: 627px) {
    max-width: 520px;
  }
`;

export const InformationsPrincipal = styled.div`
  display: flex;
  margin-bottom: 29px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-right: 24px;
`;

export const ContainerInfoPrincipal = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;

  h3 {
    font-weight: 500;
    color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.641rem;
    text-align: left;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;

  h3 {
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;
    line-height: 16.41px;
    margin-right: 4px;
  }

  p {
    font-weight: 400;
    color: #ffffff;
    font-size: 14px;
    line-height: 16.41px;
  }
`;

export const CentralizationButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  justify-content: center;
`;

export const Button = styled.a`
  background-color: #3d6cb9;
  border-radius: 5px;
  padding: 8px;
  width: 207px;
  cursor: pointer;

  h3 {
    color: #ffffff;
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 500;
    text-align: center;
  }

  :hover {
    background-color: ${shade(0.3, '#3d6cb9')};
    transition: 0.3s;
  }
`;
