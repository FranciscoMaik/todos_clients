import React from 'react';

import {
  Container,
  ContainerInfo,
  InformationsPrincipal,
  Circle,
  Button,
  CentralizationButton,
} from './styles';

export interface UsersDatas {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
  };
}

const CardUser: React.FC = () => {
  return (
    <Container>
      <InformationsPrincipal>
        <Circle />
        <div>
          <ContainerInfo>
            <h3>adasd</h3>
          </ContainerInfo>
          <ContainerInfo>
            <h3>asdasd</h3>
          </ContainerInfo>
        </div>
      </InformationsPrincipal>

      <ContainerInfo>
        <h3>E-mail:</h3>
        <p>asdasdaasd</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Telefone:</h3>
        <p>asdasd</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Rua:</h3>
        <p>asdasd</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Cidade:</h3>
        <p>asdasd</p>
      </ContainerInfo>

      <CentralizationButton>
        <Button>
          <h3>Ver mais</h3>
        </Button>
      </CentralizationButton>
    </Container>
  );
};

export default CardUser;
