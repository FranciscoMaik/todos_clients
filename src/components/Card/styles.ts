import styled, { css } from 'styled-components';

interface TagDatas {
  isCompleted: boolean;
}

export const Container = styled.div`
  padding: 18px 16px;
  background-color: #242424;
  max-width: 264px;
  border-radius: 5px;

  @media (max-width: 435px) {
    max-width: 364px;
  }

  :hover {
    max-width: 274px;
    transition: 0.7s;
  }
`;

export const Tag = styled.div<TagDatas>`
  border-radius: 10px;
  height: 6px;
  width: 43.11px;
  margin-bottom: 12px;
  background-color: #3d6cb9;

  ${props =>
    props.isCompleted &&
    css`
      background-color: #17b978;
    `}
`;

export const ContainerInfo = styled.div`
  display: flex;
  margin-bottom: 8px;

  h3 {
    font-weight: 500;
    color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.641rem;
    margin-right: 4px;
  }

  p {
    font-weight: 400;
    color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.641rem;
  }
`;
