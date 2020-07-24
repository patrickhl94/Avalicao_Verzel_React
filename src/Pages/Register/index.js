import React from 'react';

import Routes from './routes';

import { Container, LeftCard, RightCard, LoginCard } from './styles';

import logo from '../../assets/images/logo.svg';

const Register = () => {
  return (
    <Container>
      <LoginCard>
        <LeftCard>
          <img src={logo} width="300px" alt="Logo ListTask" />
          <h1>ListTasks</h1>
        </LeftCard>

        <RightCard>
          <h1>Cadastre-se no ListTasks</h1>
          <Routes />
        </RightCard>
      </LoginCard>
    </Container>
  );
};

export default Register;
