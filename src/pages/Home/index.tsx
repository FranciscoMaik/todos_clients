import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Menu from '../../components/Menu';
import Title from '../../components/Title';
import Card from '../../components/Card';

import { Container } from './styles';

interface TodoResponse {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todo, setTodo] = useState<TodoResponse[]>([]);

  useEffect(() => {
    async function getTodos() {
      const response = await api.get('/todos');
      setTodo(response.data);
    }

    getTodos();
  }, []);

  return (
    <>
      <Menu />
      <Title name="Todos os todos" />
      <Container>
        {todo.slice(0, 15).map(item => {
          return (
            <Card
              key={item.id}
              title={item.title}
              completed={item.completed}
              userId={item.userId}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Home;
