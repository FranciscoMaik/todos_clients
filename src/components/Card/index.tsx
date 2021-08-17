import React from 'react';

import { Container, ContainerInfo, Tag } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Tag />
      <ContainerInfo>
        <h3>Título:</h3>
        <p>delectus aud auton</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Responsável:</h3>
        <p>delectus aud auton</p>
      </ContainerInfo>
    </Container>
  );
};

export default Card;
