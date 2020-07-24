import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Container,
  LeftCard,
  RightCard,
  LoginCard,
  AreaRegister,
} from './styles';
import Input from '../../components/InputLogin';

import logo from '../../assets/images/logo.svg';

const Login = () => {
  const userReducer = useSelector(state => state.user);
  console.log('INITIAL ', userReducer);

  return (
    <Container>
      <LoginCard>
        <LeftCard>
          <img src={logo} width="300px" alt="Logo ListTask" />
          <h1>ListTasks</h1>
        </LeftCard>

        <RightCard>
          <h1>Entrar no ListTasks</h1>
          <form onSubmit={() => alert('Foi')}>
            <Input data={{ type: 'text', name: 'E-mail' }} />
            <Input data={{ type: 'password', name: 'Password' }} />

            <button type="submit">Entrar</button>
          </form>

          <AreaRegister>
            <p>É novo por aqui?</p>
            <Link to="/register">Cadastre-se</Link>
          </AreaRegister>
        </RightCard>
      </LoginCard>
    </Container>
  );
};

export default Login;
