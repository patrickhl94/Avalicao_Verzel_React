import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

// import api from '../../services/api';

import {
  Container,
  LeftCard,
  RightCard,
  LoginCard,
  AreaRegister,
} from './styles';
import { Input } from '../../components/Input';

import logo from '../../assets/images/logo.svg';

const Login = () => {
  const sessionReducer = useSelector(state => state.session);
  const [dataSession, setDataSession] = useState({});
  const [stateError, setStateError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (sessionReducer) {
      setDataSession({ ...sessionReducer });
    }
  }, [sessionReducer]);

  const onChange = useCallback(
    (value, nameValue) => {
      dataSession[nameValue] = value;

      setDataSession({ ...dataSession });
    },
    [dataSession],
  );

  const initSession = useCallback(
    async event => {
      event.preventDefault();

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório para entrar')
          .email('E-mail inválido '),
        password: Yup.string().required('Senha é obrigatória para entrar'),
      });

      try {
        await schema.validate(dataSession);

        // const response = api.post('session', dataSession);

        history.push('./tasks');
      } catch (error) {
        setStateError(true);
        setMsgError(error.message || 'Credenciais inválidas');
      }
    },
    [dataSession],
  );

  return (
    <Container>
      <LoginCard>
        <LeftCard>
          <img src={logo} width="300px" alt="Logo ListTask" />
          <h1>ListTasks</h1>
        </LeftCard>

        <RightCard>
          <h1>Entrar no ListTasks</h1>
          <form onSubmit={initSession}>
            <Input
              data={{
                onChange,
                value: dataSession.email,
                type: 'text',
                label: 'E-mail',
                name: 'email',
              }}
            />
            <Input
              data={{
                onChange,
                value: dataSession.password,
                type: 'password',
                label: 'Senha',
                name: 'password',
              }}
            />
            {stateError && <small>{msgError}</small>}
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
