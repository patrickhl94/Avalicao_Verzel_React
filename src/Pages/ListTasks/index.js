import React, { useCallback, useState /* useEffect */ } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import {
  FaTrash,
  FaEye,
  FaEdit,
  FaCheck,
  FaRegCircle,
  FaTasks,
} from 'react-icons/fa';

import {
  Container,
  ContainerList,
  Button,
  ListItem,
  AreaButonGegister,
  AreaVisualizationTask,
} from './styles';
import Modal from '../../components/Modal';

// import api from '../../services/api';

const ListTasks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsRegister, setModalIsRegister] = useState(true);
  const [idTaskUpdate, setIdTaskUpdate] = useState(null);
  const listTasksReducer = useSelector(state => state.listTask, shallowEqual);
  const dispatch = useDispatch();
  // const session = useSelector(state => state.session, shallowEqual);

  /**
   *  useEffect QUE BUSCA OS DADOS NA API FAKE, BASTA
   *  RETIRAR OS COMENTÁRIO DAS LINHAS, 1, 23, 31 E 42 AO 55
   *
   * NESTE useEffect, A APLICAÇÃO IRÁ REALIZAR A REQUISIÇÃO À API
   * PARA BUSCAR A LISTAGEM DO BANCO DE DADOS, CASO ELA NÃO CONSIGA,
   * À APLICAÇÃO IRÁ MOSTRAR A RELAÇÃO SALVA NO STORAGE PELO REDUX.
   */

  // useEffect(() => {
  //   const { id } = session;
  //   api
  //     .get(`tasks?idUser=${id}`)
  //     .then(response => {
  //       dispatch({
  //         type: 'UPDATE_ALL_TASKS',
  //         newListTasks: response.data,
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [dispatch, session]);

  const toViewTaskAction = useCallback(
    id => {
      dispatch({
        type: 'UPDATE_STATUS_VIEW',
        id,
      });
    },
    [dispatch],
  );

  const removeTaskList = useCallback(
    async id => {
      if (!window.confirm('Confirma exclusão desta tarefa?')) {
        return;
      }
      dispatch({
        type: 'DELETE_TASK',
        id,
      });
    },
    [dispatch],
  );

  const confimeTask = useCallback(
    (id, status) => {
      if (
        !status &&
        !window.confirm('Confirma marcar esta tarefa como concluída?')
      ) {
        return;
      }
      if (
        !!status &&
        !window.confirm('Confirma marcar esta tarefa como NÃO concluída?')
      ) {
        return;
      }

      dispatch({
        type: 'UPDATE_STATUS_TASK',
        id,
        status,
      });
    },

    [dispatch],
  );

  const openModalRegister = useCallback(() => {
    setIdTaskUpdate(null);
    setModalIsRegister(true);
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  }, [modalIsOpen]);
  const openModalUpdate = useCallback(
    id => {
      setIdTaskUpdate(id);
      setModalIsRegister(false);
      modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    },
    [modalIsOpen],
  );

  return (
    <Container>
      <ContainerList>
        <h1>ListTasks</h1>
        <AreaButonGegister>
          <button onClick={openModalRegister} type="button">
            Cadastrar nova tarefa
            <FaTasks size={30} color="#50758d" />
          </button>
        </AreaButonGegister>

        <ul>
          {listTasksReducer.map(task => (
            <ListItem key={task.id}>
              <div>
                <div>
                  <Button
                    onClick={() => confimeTask(task.id, task.status)}
                    type="button"
                  >
                    {task.status ? (
                      <FaCheck size={25} color="#43db3b" />
                    ) : (
                      <FaRegCircle size={25} color="red" />
                    )}
                  </Button>

                  <h2>{task.name}</h2>
                </div>

                <div>
                  <Button onClick={() => removeTaskList(task.id)} type="button">
                    <FaTrash size={25} color="#50758d" />
                  </Button>

                  <Button
                    onClick={() => toViewTaskAction(task.id)}
                    type="button"
                  >
                    <FaEye size={25} color="#50758d" />
                  </Button>

                  <Button
                    onClick={() => openModalUpdate(task.id)}
                    type="button"
                  >
                    <FaEdit size={25} color="#50758d" />
                  </Button>
                </div>
              </div>

              {task.toViewTask && (
                <AreaVisualizationTask>
                  <div>
                    <p>{task.description}</p>
                  </div>

                  <div>
                    <span>
                      <strong>Status: </strong>{' '}
                      {task.status ? 'Concluída' : 'Em aberto'}
                    </span>
                    <span>
                      <strong>Data da entrega: </strong>{' '}
                      {format(parseISO(task.dateDelivery), 'dd/MM/yyyy')}
                    </span>
                    <span>
                      <strong>Data da conclusão: </strong>
                      {task.dateConclusion
                        ? format(parseISO(task.dateConclusion), 'dd/MM/yyyy')
                        : 'Aguardando Conclusão'}
                    </span>
                  </div>
                </AreaVisualizationTask>
              )}
            </ListItem>
          ))}
        </ul>
      </ContainerList>
      <Modal
        dataPropModal={{
          isRegister: modalIsRegister,
          idTask: idTaskUpdate,
          modalOpen: modalIsOpen,
        }}
      />
    </Container>
  );
};

export default ListTasks;
