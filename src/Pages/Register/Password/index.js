import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { FaAngleLeft } from 'react-icons/fa';
import * as Yup from 'yup';

import logo from '../../../assets/images/logo.svg';

import {
  AreaProxOrRetu,
  ButtonRegister,
  Container,
  LoginCard,
  LeftCard,
  RightCard,
} from '../styles';

import { Input } from '../../../components/Input';

const PasswordRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUserReducer = useSelector(
    state => state.userRegister,
    shallowEqual,
  );
  const [dataUser, setDataUser] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [msgError, setMsgError] = useState('');

  const onChange = useCallback(
    (value, nameValue) => {
      dataUser[nameValue] = value;

      setDataUser({ ...dataUser });
      if (dataUser.password && dataUser.passwordConfirme) {
        return setDisabledButton(true);
      }
      return setDisabledButton(false);
    },
    [dataUser],
  );

  const Register = useCallback(async () => {
    dispatch({
      type: 'ADD_PASSWORD_REGISTER',
      dataUser,
    });

    const schema = Yup.object().shape({
      addressRegister: Yup.object().shape({
        zipCode: Yup.string(),
        street: Yup.string(),
        number: Yup.string(),
        neighborhood: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
      }),
      personalDataRedister: Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        birth: Yup.string().required('Data de nascimento é obrigatória'),
        cpf: Yup.string(),
      }),
    });

    const schemaPassword = Yup.object().shape({
      password: Yup.string()
        .required('A senha é obrigatória')
        .min(8, 'A senha deve ter pelo menos 8 caracteres'),
      passwordConfirme: Yup.string()
        .required('A confirmação da senha é obrigatória')
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais'),
    });

    try {
      await schema.validate(dataUserReducer);
      await schemaPassword.validate(dataUser);

      dispatch({
        type: 'ADD_PASSWORD',
        password: dataUser.password,
      });

      dispatch({
        type: 'ADD_NEW_USER',
        user: {
          id: uuid(),
          ...dataUserReducer.addressRegister,
          ...dataUserReducer.personalDataRedister,
          password: dataUser.password,
        },
      });

      dispatch({
        type: 'CLEAR_STATE',
      });

      alert('Parabéns, seu cadastro foi realizado com sucesso!');
      history.push('/login');
    } catch (error) {
      setStateError(true);
      setMsgError(error.message);
    }
  }, [history, dataUser, dispatch, dataUserReducer]);

  return (
    <Container>
      <LoginCard>
        <LeftCard>
          <img src={logo} width="300px" alt="Logo ListTask" />
          <h1>ListTasks</h1>
        </LeftCard>

        <RightCard>
          <h1>Cadastre sua senha</h1>
          <div>
            <Input
              data={{
                type: 'password',
                label: 'Senha *',
                name: 'password',
                typeReducer: 'ADD_PASSWORD',
                value: dataUser.password,
                onChange,
              }}
            />
            <Input
              data={{
                type: 'password',
                label: 'Confirme a senha *',
                name: 'passwordConfirme',
                typeReducer: 'ADD_PASSWORD_CONFIRME',
                value: dataUser.passwordConfirme,
                onChange,
              }}
            />
          </div>
          {stateError && <small>{msgError}</small>}
          <AreaProxOrRetu disabledButton={disabledButton}>
            <Link to="/registerAddress">
              <FaAngleLeft size={25} />
              <p>Retornar</p>
            </Link>
            <ButtonRegister
              disabled={!disabledButton}
              onClick={Register}
              type="button"
            >
              Cadastrar
            </ButtonRegister>
          </AreaProxOrRetu>
        </RightCard>
      </LoginCard>
    </Container>
  );
};
export default PasswordRegister;
