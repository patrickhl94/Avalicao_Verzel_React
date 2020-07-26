import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import * as Yup from 'yup';

// import api from '../../../services/api';
import { AreaProxOrRetu, ButtonRegister, Container } from './styles';

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
    // const {
    //   addressRegister,
    //   passordRegister,
    //   personalDataRedister,
    // } = dataUserReducer;

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

      // await api.post('/register', {
      //   addressRegister,
      //   passordRegister,
      //   personalDataRedister,
      // });

      dispatch({
        type: 'ADD_PASSWORD',
        password: dataUser.password,
      });

      dispatch({
        type: 'CLEAR_STATE',
      });

      alert('Parabéns, seu cadastro foi realizado com sucesso!');
      history.push('/login');
    } catch (error) {
      setStateError(true);
      setMsgError(error.message);
      console.log('Erro: ', error);
    }
  }, [history, dataUser, dispatch, dataUserReducer]);

  return (
    <Container>
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
        <Link to="/register/addressRegister">
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
    </Container>
  );
};
export default PasswordRegister;
