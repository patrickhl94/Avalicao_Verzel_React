import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

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
  const userReducer = useSelector(state => state.users);
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

        const user = userReducer.find(
          userFind =>
            userFind.email === dataSession.email &&
            userFind.password === dataSession.password,
        );

        if (!user) {
          throw new Error('E-mail ou Senha inválidos');
        }

        dispatch({
          type: 'START_SESSION',
          data: {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
          },
        });

        history.push('./tasks');
      } catch (error) {
        setStateError(true);
        setMsgError(error.message);
      }
    },
    [dataSession, dispatch, history, userReducer],
  );

  return (
    <Container>
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
            <Link to="/">Cadastre-se</Link>
          </AreaRegister>
        </RightCard>
      </LoginCard>
    </Container>
  );
};

export default Login;
