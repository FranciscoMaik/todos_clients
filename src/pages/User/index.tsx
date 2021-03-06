import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Menu from '../../components/Menu';
import Title from '../../components/Title';
import CardUser, { UsersDatas } from '../../components/CardUser';

import { Container } from './styles';

const User: React.FC = () => {
  const [user, setUser] = useState<UsersDatas[]>([]);

  useEffect(() => {
    async function getAllUsers() {
      const response = await api.get('/users/');
      setUser(response.data);
    }

    getAllUsers();
  }, []);

  return (
    <>
      <Menu />
      <Title name="Usuários" />
      <Container>
        {user.map(item => {
          return (
            <CardUser
              key={item.id}
              id={item.id}
              email={item.email}
              name={item.name}
              phone={item.phone}
              address={item.address}
              website={item.website}
            />
          );
        })}
      </Container>
    </>
  );
};

export default User;
