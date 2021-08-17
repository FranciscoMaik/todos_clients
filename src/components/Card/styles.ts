import styled from 'styled-components';

export const Container = styled.div`
  padding: 18px 16px;
  background-color: #242424;
  max-width: 264px;
  border-radius: 5px;
`;

export const Tag = styled.div`
  background-color: #17b978;
  border-radius: 10px;
  height: 6px;
  width: 43.11px;
  margin-bottom: 12px;
`;

export const ContainerInfo = styled.div`
  display: flex;

  h3 {
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;
    line-height: 16.41px;
    margin-bottom: 8px;
    margin-right: 4px;
  }

  p {
    font-weight: 400;
    color: #ffffff;
    font-size: 14px;
    line-height: 16.41px;
  }
`;
