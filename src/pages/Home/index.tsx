import React from 'react';

import Menu from '../../components/Menu';
import Title from '../../components/Title';
import Card from '../../components/Card';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <Title name="Todos os todos" />
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default Home;
