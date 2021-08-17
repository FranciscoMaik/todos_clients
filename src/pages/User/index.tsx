import React from 'react';

import Menu from '../../components/Menu';
import Title from '../../components/Title';

import { Container } from './styles';

const User: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Title name="Usuários" />
    </Container>
  );
};

export default User;
