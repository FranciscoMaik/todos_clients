import React from 'react';

import { Container, Text } from './styles';

interface TitleResponse {
  name: string;
}

const Title: React.FC<TitleResponse> = ({ name }: TitleResponse) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
};

export default Title;
