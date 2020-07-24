import React, { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import { AreaProxOrRetu, ButtonRegister } from './styles';

import Input from '../../../components/Input';

const PasswordRegister = () => {
  const dataUser = useSelector(state => state.user, shallowEqual);

  const history = useHistory();

  const Register = useCallback(() => {
    history.push('/list');
  }, [history]);

  return (
    <>
      <div>
        <Input
          data={{
            type: 'password',
            name: 'Senha',
            typeReducer: 'ADD_PASSWORD',
          }}
        />
        <Input
          data={{
            type: 'password',
            name: 'Confirme a senha',
            typeReducer: 'ADD_PASSWORD_CONFIRME',
          }}
        />
      </div>
      <AreaProxOrRetu>
        <Link to="/register/addressRegister">
          <FaAngleLeft size={25} />
          <p>Retornar</p>
        </Link>
        <ButtonRegister onClick={Register} type="button">
          Cadastrar
        </ButtonRegister>
      </AreaProxOrRetu>
    </>
  );
};
export default PasswordRegister;
