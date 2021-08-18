import React from 'react';

import { Container, Title, ContainerItens, Itens } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>ToDos Clients</Title>
      <ContainerItens>
        <Itens to="/">ToDos</Itens>
        <Itens to="/user">Usuários</Itens>
      </ContainerItens>
    </Container>
  );
};

export default Menu;
