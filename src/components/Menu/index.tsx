import React from 'react';

import { Container, Title, ContainerItens, Itens } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>PostIts Clients</Title>
      <ContainerItens>
        <Itens to="/">Todos</Itens>
        <Itens to="/user">Usuários</Itens>
      </ContainerItens>
    </Container>
  );
};

export default Menu;
