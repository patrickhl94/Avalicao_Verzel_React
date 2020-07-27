import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';

import {
  Container,
  LeftCard,
  RightCard,
  LoginCard,
  AreaRegister,
  CardWelcome,
  AreaText,
} from './styles';
import { Input } from '../../components/Input';

import logo from '../../assets/images/logo.svg';

const Login = () => {
  const sessionReducer = useSelector(state => state.session);
  const dispatch = useDispatch();
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

        const response = await api.get(
          `/users?password=${dataSession.password}&email=${dataSession.email}`,
          dataSession,
        );

        if (!response.data[0]) {
          throw new Error('Credenciais Inválidas');
        }

        dispatch({
          type: 'START_SESSION',
          data: response.data[0],
        });

        history.push('./tasks');
      } catch (error) {
        setStateError(true);
        setMsgError(error.message);
      }
    },
    [dataSession, dispatch, history],
  );

  return (
    <Container>
      <CardWelcome>
        <AreaText>
          <h2>
            Bem vindo(a) ao <span>ListTasks</span>
          </h2>
          <p>
            O ListTask é um projeto avaliativo desenvolvido em React, realizado
            para concorrer uma vaga de desenvolvedor frontend na{' '}
            <a href="https://www.verzel.com.br/">VERZEL</a>, empresa de
            desenvolvimento, consultoria e reestruturação de Sistemas de
            Informação.
          </p>
        </AreaText>
      </CardWelcome>

      <LoginCard>
        <LeftCard>
          <img src={logo} width="300px" alt="Logo ListTask" />
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
