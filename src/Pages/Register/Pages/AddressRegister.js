import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import { AreaProxOrRetu } from './styles';

import Input from '../../../components/Input';

const AddressRegister = () => {
  return (
    <>
      <div>
        <Input
          data={{ type: 'number', name: 'Cep', typeReducer: 'ADD_ZIPCODE' }}
        />
        <Input
          data={{ type: 'text', name: 'Rua', typeReducer: 'ADD_STREET' }}
        />
        <Input
          data={{ type: 'number', name: 'Número', typeReducer: 'ADD_NUMBER' }}
        />
        <Input
          data={{
            type: 'text',
            name: 'Bairro',
            typeReducer: 'ADD_NEIGHBORHOOD',
          }}
        />
        <Input
          data={{ type: 'text', name: 'Cidade', typeReducer: 'ADD_CITY' }}
        />
        <Input
          data={{ type: 'text', name: 'Estado', typeReducer: 'ADD_STATE' }}
        />
      </div>
      <AreaProxOrRetu>
        <Link to="/register">
          <FaAngleLeft size={25} />
          <p>Retornar</p>
        </Link>
        <Link to="/register/passwordRegister">
          <p>Próximo</p>
          <FaAngleRight size={25} />
        </Link>
      </AreaProxOrRetu>
    </>
  );
};

export default AddressRegister;
