import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, ContainerInfo, Tag } from './styles';

interface CardResponse {
  userId: string;
  title: string;
  completed: boolean;
}

interface UserResponse {
  name: string;
}

const Card: React.FC<CardResponse> = ({
  userId,
  completed,
  title,
}: CardResponse) => {
  const [name, setName] = useState<UserResponse>({} as UserResponse);

  useEffect(() => {
    async function getNameUser() {
      const response = await api.get(`/users/${userId}`);
      setName(response.data);
    }

    getNameUser();
  }, [userId]);

  return (
    <Container>
      <Tag />
      <ContainerInfo>
        <h3>Título:</h3>
        <p>{title}</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Responsável:</h3>
        <p>{name.name}</p>
      </ContainerInfo>
    </Container>
  );
};

export default Card;
