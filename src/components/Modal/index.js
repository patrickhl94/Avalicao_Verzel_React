import React, { useState, useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';

import {
  Container,
  ModalBody,
  ModalHeader,
  AreaButtonRegister,
} from './styles';
import { Input, TextArea } from '../Input';

const Modal = ({ modalOpen, dataProp }) => {
  const [isOpenState, setIsOpenState] = useState(true);
  const [registerTask, setRegisterTask] = useState({});

  const closeModal = useCallback(() => {
    if (modalOpen) return setIsOpenState(false);
    return setIsOpenState(true);
  }, [modalOpen]);

  const onChange = useCallback(
    (value, nameValue) => {
      registerTask[nameValue] = value;

      setRegisterTask({ ...registerTask });
    },
    [registerTask],
  );

  const registerNewTaks = useCallback(() => {
    console.log(registerTask);
  }, [registerTask]);

  return (
    <Container isOpenState={isOpenState} isOpenProp={modalOpen}>
      <ModalBody>
        <ModalHeader>
          <FiXCircle onClick={closeModal} size={30} color="#50758d" />
        </ModalHeader>

        <Input
          data={{
            onChange,
            value: registerTask.name,
            type: 'text',
            label: 'Nome',
            name: 'name',
          }}
        />
        <Input
          data={{
            onChange,
            value: registerTask.dateDelivery,
            type: 'date',
            label: 'Data de entrega',
            name: 'dateDelivery',
          }}
        />
        <Input
          data={{
            onChange,
            value: registerTask.dateConclusion,
            type: 'date',
            label: 'Data da conclusão',
            name: 'dateConclusion',
          }}
        />

        <TextArea
          data={{
            onChange,
            value: registerTask.description,
            type: 'text',
            label: 'Descrição',
            name: 'description',
          }}
        />
        <small style={{ color: 'blue' }}>
          Deixe a data de conclusão em branco, caso não tenha previsão de
          conclusão
        </small>

        <AreaButtonRegister>
          <button onClick={registerNewTaks} type="button">
            Cadastrar
          </button>
        </AreaButtonRegister>
      </ModalBody>
    </Container>
  );
};

export default Modal;
