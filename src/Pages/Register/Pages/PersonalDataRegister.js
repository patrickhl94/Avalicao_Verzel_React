import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import { AreaProxOrRetu } from './styles';

import Input from '../../../components/Input';

const PersonalDataRegister = () => {
  const addDataUser = useCallback(() => {}, []);

  return (
    <>
      <div>
        <Input
          data={{
            type: 'text',
            name: 'Nome',
            typeReducer: 'ADD_NAME',
          }}
        />
        <Input
          data={{
            type: 'text',
            name: 'E-mail',
            typeReducer: 'ADD_EMAIL',
          }}
        />
        <Input
          data={{
            type: 'text',
            name: 'Nascimento',
            typeReducer: 'ADD_BIRD',
          }}
        />
        <Input
          data={{
            type: 'text',
            name: 'CPF',
            typeReducer: 'ADD_CPF',
          }}
        />
      </div>
      <AreaProxOrRetu>
        <Link
          onClick={addDataUser}
          style={{ marginRight: '0px' }}
          to="/register/addressRegister"
        >
          <p>Próximo</p>
          <FaAngleRight size={25} />
        </Link>
      </AreaProxOrRetu>
    </>
  );
};

export default connect()(PersonalDataRegister);
