import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import { AreaProxOrRetu } from './styles';

import Input from '../../../components/Input';

const AddressRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({});

  const onChange = useCallback(
    (value, nameValue) => {
      dataUser[nameValue] = value;

      setDataUser(dataUser);
    },
    [dataUser],
  );

  const proxPage = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        zipCode: Yup.string(),
        street: Yup.string(),
        number: Yup.string(),
        neighborhood: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
      });

      await schema.validate(dataUser);

      dispatch({
        type: 'ADD_ADDRESS_REGISTER',
        dataUser,
      });

      history.push('/register/passwordRegister');
    } catch (error) {
      console.log('Erro: ', error);
    }
  }, [dataUser, history, dispatch]);

  return (
    <>
      <div>
        <Input
          data={{
            type: 'number',
            label: 'Cep',
            name: 'zipCode',
            typeReducer: 'ADD_ZIPCODE',
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Rua',
            name: 'street',
            typeReducer: 'ADD_STREET',
            onChange,
          }}
        />
        <Input
          data={{
            type: 'number',
            label: 'Número',
            name: 'number',
            typeReducer: 'ADD_NUMBER',
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Bairro',
            name: 'neighborhood',
            typeReducer: 'ADD_NEIGHBORHOOD',
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Cidade',
            name: 'city',
            typeReducer: 'ADD_CITY',
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Estado',
            name: 'state',
            typeReducer: 'ADD_STATE',
            onChange,
          }}
        />
      </div>
      <AreaProxOrRetu disabledButton>
        <Link type="button" to="/register">
          <FaAngleLeft size={25} />
          <p>Retornar</p>
        </Link>
        <button onClick={proxPage} type="button">
          <p>Próximo</p>
          <FaAngleRight size={25} />
        </button>
      </AreaProxOrRetu>
    </>
  );
};

export default AddressRegister;
