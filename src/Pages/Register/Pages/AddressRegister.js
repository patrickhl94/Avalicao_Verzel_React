import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import verifyZipCode from '../../../utils/verifyZipCode';

import { AreaProxOrRetu, Container } from './styles';
import { Input } from '../../../components/Input';

const AddressRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({});
  const [stateError, setStateError] = useState(false);
  const [msgError, setMsgError] = useState('Insira um CEP válido');

  const dataUserReducer = useSelector(
    state => state.userRegister,
    shallowEqual,
  );

  useEffect(() => {
    if (dataUserReducer.addressRegister) {
      const { addressRegister } = dataUserReducer;

      setDataUser(addressRegister);
    }
  }, [dataUserReducer]);

  const onChange = useCallback(
    async (value, nameValue) => {
      setStateError(false);

      dataUser[nameValue] = value;
      setDataUser({ ...dataUser });

      if (nameValue === 'zipCode' && value.length === 8) {
        const address = await verifyZipCode(value);

        if (address.erro) {
          setStateError(true);
          setMsgError('Insira um CEP válido');

          setDataUser({
            street: '',
            neighborhood: '',
            city: '',
            state: '',
          });
        }

        setDataUser({
          ...dataUser,
          number: '',
          street: address.logradouro,
          neighborhood: address.bairro,
          city: address.localidade,
          state: address.uf,
        });
      }
      console.log('entrou2');
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
    <Container>
      <div>
        <Input
          data={{
            type: 'number',
            label: 'Cep',
            name: 'zipCode',
            typeReducer: 'ADD_ZIPCODE',
            value: dataUser.zipCode,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Rua',
            name: 'street',
            typeReducer: 'ADD_STREET',
            value: dataUser.street,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'number',
            label: 'Número',
            name: 'number',
            typeReducer: 'ADD_NUMBER',
            value: dataUser.number,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Bairro',
            name: 'neighborhood',
            typeReducer: 'ADD_NEIGHBORHOOD',
            value: dataUser.neighborhood,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Cidade',
            name: 'city',
            typeReducer: 'ADD_CITY',
            value: dataUser.city,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'Estado',
            name: 'state',
            typeReducer: 'ADD_STATE',
            value: dataUser.state,
            onChange,
          }}
        />
      </div>
      {stateError && <small>{msgError}</small>}
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
    </Container>
  );
};

export default AddressRegister;
