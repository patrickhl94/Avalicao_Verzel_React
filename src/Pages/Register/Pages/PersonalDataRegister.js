import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FaAngleRight } from 'react-icons/fa';

import validatorCPF from '../../../utils/validatorCPF';
import validatorBirth from '../../../utils/validatorBirth';

import { AreaProxOrRetu, Container } from './styles';
import { Input } from '../../../components/Input';

const PersonalDataRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [msgError, setMsgError] = useState('');

  const dataUserReducer = useSelector(
    state => state.userRegister,
    shallowEqual,
  );

  useEffect(() => {
    if (dataUserReducer.personalDataRedister) {
      const { personalDataRedister } = dataUserReducer;

      setDataUser(personalDataRedister);
      setDisabledButton(true);
    }
  }, [dataUserReducer]);

  const onChange = useCallback(
    (value, nameValue) => {
      dataUser[nameValue] = value;

      setDataUser({ ...dataUser });

      if (dataUser.name && dataUser.birth && dataUser.email) {
        return setDisabledButton(true);
      }
      return setDisabledButton(false);
    },
    [dataUser],
  );

  const proxPage = useCallback(async () => {
    setStateError(false);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        birth: Yup.string().required('Data de nascimento é obrigatória'),
        cpf: Yup.string(),
      });

      await schema.validate(dataUser);

      if (!validatorBirth(dataUser.birth)) {
        setStateError(true);
        setMsgError('É preciso ter mais que 12 anos par se cadastrar');
        return;
      }

      if (dataUser.cpf && !validatorCPF(dataUser.cpf)) {
        setStateError(true);
        setMsgError('Digite um CPF válido');
        return;
      }

      dispatch({
        type: 'ADD_PERSONAL_DATA_REGISTER',
        dataUser,
      });

      dispatch({
        type: 'ADD_EMAIL',
        email: dataUser.email,
      });

      history.push('/register/addressRegister');
    } catch (error) {
      setStateError(true);
      setMsgError(error.message);
    }
  }, [dataUser, history, dispatch]);

  return (
    <Container>
      <div>
        <Input
          data={{
            type: 'text',
            label: 'Nome *',
            name: 'name',
            typeReducer: 'ADD_NAME',
            value: dataUser.name,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'E-mail *',
            name: 'email',
            typeReducer: 'ADD_EMAIL',
            value: dataUser.email,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'date',
            label: 'Nascimento *',
            name: 'birth',
            typeReducer: 'ADD_BIRTH',
            value: dataUser.birth,
            onChange,
          }}
        />
        <Input
          data={{
            type: 'text',
            label: 'CPF',
            name: 'cpf',
            typeReducer: 'ADD_CPF',
            value: dataUser.cpf,
            onChange,
          }}
        />
      </div>
      {stateError && <small>{msgError}</small>}
      <AreaProxOrRetu disabledButton={disabledButton}>
        <button
          disabled={!disabledButton}
          type="button"
          onClick={proxPage}
          style={{ marginRight: '0px' }}
        >
          Próximo
          <FaAngleRight size={25} />
        </button>
      </AreaProxOrRetu>
    </Container>
  );
};

export default PersonalDataRegister;
