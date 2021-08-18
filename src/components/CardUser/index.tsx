import React from 'react';

import {
  Container,
  ContainerInfo,
  InformationsPrincipal,
  Circle,
  Button,
  CentralizationButton,
  ContainerInfoPrincipal,
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

const CardUser: React.FC<UsersDatas> = ({
  address,
  email,
  name,
  phone,
  website,
}: UsersDatas) => {
  return (
    <Container>
      <InformationsPrincipal>
        <Circle />
        <div>
          <ContainerInfoPrincipal>
            <h3>{name}</h3>
          </ContainerInfoPrincipal>
          <ContainerInfoPrincipal>
            <h3>{website}</h3>
          </ContainerInfoPrincipal>
        </div>
      </InformationsPrincipal>

      <ContainerInfo>
        <h3>E-mail:</h3>
        <p>{email}</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Telefone:</h3>
        <p>{phone}</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Rua:</h3>
        <p>{address.street}</p>
      </ContainerInfo>

      <ContainerInfo>
        <h3>Cidade:</h3>
        <p>{address.city}</p>
      </ContainerInfo>

      {/* Integração de Modal */}

      {/* <CentralizationButton>
        <Button>
          <h3>Ver mais</h3>
        </Button>
      </CentralizationButton> */}
    </Container>
  );
};

export default CardUser;
