import React from 'react';

import { Container, Title, ContainerItens, Itens } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>PostIts Clients</Title>
      <ContainerItens>
        <Itens>Todos</Itens>
        <Itens>Usuários</Itens>
      </ContainerItens>
    </Container>
  );
};

export default Menu;
