import React from 'react';
import { Link } from 'react-router-dom';

import { Container, AreaLogo, AreaMenu, AreaLogin } from './styles';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <Container>
      <Container>
        <AreaLogo to="/">
          <img src={logo} alt="" width="30px" />
          <h1>ListTasks</h1>
        </AreaLogo>

        <AreaMenu>
          <Link to="/">Sobre</Link>
          <Link to="/">Entre em Contato</Link>
          <Link to="/">Versão Premium</Link>
        </AreaMenu>
      </Container>

      <AreaLogin>
        <Link type="button" to="/login">
          Login
        </Link>
        <Link type="button" to="/register">
          Cadastre-se
        </Link>
      </AreaLogin>
    </Container>
  );
};

export default Header;
