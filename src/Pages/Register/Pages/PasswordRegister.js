import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import * as Yup from 'yup';

import api from '../../../services/api';
import { AreaProxOrRetu, ButtonRegister } from './styles';

import Input from '../../../components/Input';

const PasswordRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUserReducer = useSelector(
    state => state.userRegister,
    shallowEqual,
  );
  const [dataUser, setDataUser] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);

  const onChange = useCallback(
    (value, nameValue) => {
      dataUser[nameValue] = value;

      setDataUser(dataUser);
      if (dataUser.password && dataUser.passwordConfirme) {
        return setDisabledButton(true);
      }
      return setDisabledButton(false);
    },
    [dataUser],
  );

  const Register = useCallback(async () => {
    const {
      addressRegister,
      passordRegister,
      personalDataRedister,
    } = dataUserReducer;

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
      passordRegister: Yup.object().shape({
        password: Yup.string().required('Senha é obrigatória'),
        passwordConfirme: Yup.string().required(
          'Confirmação da senha é obrigatória',
        ),
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

    try {
      await schema.validate(dataUserReducer);

      // await api.post('/register', {
      //   addressRegister,
      //   passordRegister,
      //   personalDataRedister,
      // });

      dispatch({
        type: 'CLEAR_STATE',
      });

      history.push('/login');
    } catch (error) {
      console.log('Erro: ', error);
    }
  }, [history, dataUser, dispatch, dataUserReducer]);

  return (
    <>
      <div>
        <Input
          data={{
            type: 'password',
            label: 'Senha *',
            name: 'password',
            typeReducer: 'ADD_PASSWORD',
            onChange,
          }}
        />
        <Input
          data={{
            type: 'password',
            label: 'Confirme a senha *',
            name: 'passwordConfirme',
            typeReducer: 'ADD_PASSWORD_CONFIRME',
            onChange,
          }}
        />
      </div>
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
    </>
  );
};
export default PasswordRegister;
