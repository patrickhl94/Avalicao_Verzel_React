import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, AreaLogo, AreaMenu, AreaLogin, AreaLogout } from './styles';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  const userSession = useSelector(state => state.session);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({
      type: 'END_SESSION',
    });
  }, [dispatch]);

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

      {userSession.token ? (
        <AreaLogout>
          <span>Patrick Lima</span>
          <button onClick={logout} type="button">
            Sair
          </button>
        </AreaLogout>
      ) : (
        <AreaLogin>
          <Link to="/">Entrar</Link>
          <Link to="/register">Cadastre-se</Link>
        </AreaLogin>
      )}
    </Container>
  );
};

export default Header;
