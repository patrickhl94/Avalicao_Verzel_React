import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { isBefore, parseISO } from 'date-fns';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FiXCircle } from 'react-icons/fi';

import {
  Container,
  ModalBody,
  ModalHeader,
  AreaButtonRegister,
} from './styles';
import { Input, TextArea } from '../Input';

import logo from '../../assets/images/logo.svg';

const Modal = ({ dataPropModal }) => {
  const [isOpenState, setIsOpenState] = useState(true);
  const [registerTask, setRegisterTask] = useState({});
  const [smallMsg, setSmallMsg] = useState(
    'Deixe a data de conclusão em branco, caso não tenha previsão de conclusão',
  );
  const [smallError, setSmallError] = useState(false);
  const dispath = useDispatch();
  const userSession = useSelector(state => state.session);
  const taskUpdate = useSelector(state => {
    return state.listTask.filter(tasks => tasks.id === dataPropModal.idTask);
  });

  useEffect(() => {
    const task = taskUpdate[0];
    if (task && dataPropModal.idTask) {
      const { dateConclusion, dateDelivery, description, name } = task;
      setRegisterTask({ dateConclusion, dateDelivery, description, name });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPropModal.idTask]);

  const closeModal = useCallback(() => {
    dataPropModal.idTask = null;
    setRegisterTask({});

    if (dataPropModal.modalOpen) return setIsOpenState(false);
    return setIsOpenState(true);
  }, [dataPropModal]);

  const onChange = useCallback(
    (value, nameValue) => {
      registerTask[nameValue] = value;
      setRegisterTask({ ...registerTask });
    },
    [registerTask],
  );

  const registerNewTaks = useCallback(async () => {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome da tarefa é obrigatório'),
      dateDelivery: Yup.string().required('A data da tarefa é obrigatória'),
      dateConclusion: Yup.string(),
      description: Yup.string().required('A descrição da tarefa é obrigatória'),
    });

    setSmallMsg(
      'Deixe a data de conclusão em branco, caso não tenha previsão de conclusão',
    );
    setSmallError(false);

    try {
      await schema.validate(registerTask);

      const { dateConclusion, dateDelivery } = registerTask;

      if (isBefore(parseISO(dateConclusion), parseISO(dateDelivery))) {
        throw new Error(
          'A data da entrega não pode ser menor que a data da conclusão',
        );
      }

      dispath({
        type: 'ADD_TASK',
        task: {
          ...registerTask,
          id: uuid(),
          userId: userSession.id,
          status: !!dateConclusion,
          toViewTask: false,
        },
      });

      closeModal();
    } catch (error) {
      setSmallMsg(error.message);
      setSmallError(true);
    }
  }, [registerTask, dispath, closeModal, userSession.id]);

  const updateTaks = useCallback(async () => {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome da tarefa é obrigatório'),
      dateDelivery: Yup.string().required('A data da tarefa é obrigatória'),
      dateConclusion: Yup.string(),
      description: Yup.string().required('A descrição da tarefa é obrigatória'),
    });

    setSmallMsg(
      'Deixe a data de conclusão em branco, caso não tenha previsão de conclusão',
    );
    setSmallError(false);

    const { dateConclusion, dateDelivery, description, name } = registerTask;

    try {
      await schema.validate(registerTask);

      if (isBefore(parseISO(dateConclusion), parseISO(dateDelivery))) {
        throw new Error(
          'A data da entrega não pode ser menor que a data da conclusão',
        );
      }

      dispath({
        type: 'UPTADE_TASK',
        task: {
          dateConclusion: dateConclusion || '',
          dateDelivery,
          description,
          name,
        },
        id: dataPropModal.idTask,
      });

      closeModal();
    } catch (error) {
      setSmallMsg(error.message);
      setSmallError(true);
    }
  }, [registerTask, dispath, closeModal, dataPropModal.idTask]);

  return (
    <Container isOpenState={isOpenState} isOpenProp={dataPropModal.modalOpen}>
      <ModalBody colorSmall={smallError}>
        <ModalHeader>
          <FiXCircle onClick={closeModal} size={30} color="#50758d" />
        </ModalHeader>

        <div>
          <h1>
            {' '}
            {dataPropModal.isRegister ? 'Cadastre uma ' : 'Atualizar '}
            tarefa
          </h1>
          <img src={logo} alt="Logo ListTasks" width="40px" />
        </div>

        <Input
          data={{
            onChange,
            value: registerTask.name,
            type: 'text',
            label: 'Nome *',
            name: 'name',
          }}
        />
        <Input
          data={{
            onChange,
            value: registerTask.dateDelivery,
            type: 'date',
            label: 'Data de entrega *',
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
            label: 'Descrição *',
            name: 'description',
          }}
        />

        <small>{smallMsg}</small>

        <AreaButtonRegister>
          {dataPropModal.isRegister ? (
            <button onClick={registerNewTaks} type="button">
              Cadastrar
            </button>
          ) : (
            <button
              onClick={() => updateTaks(dataPropModal.idTask)}
              type="button"
            >
              Atualizar
            </button>
          )}
        </AreaButtonRegister>
      </ModalBody>
    </Container>
  );
};

Modal.propTypes = {
  dataPropModal: PropTypes.shape({
    isRegister: PropTypes.bool,
    idTask: PropTypes.string,
    modalOpen: PropTypes.bool,
  }).isRequired,
};

export default Modal;
