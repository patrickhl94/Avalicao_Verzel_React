import React, { useCallback, useState, useEffect } from 'react';
import { format } from 'date-fns';
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

import api from '../../services/api';

const ListTasks = () => {
  const [listTasks, setListTasks] = useState([
    {
      id: '123',
      name: 'Passear com o cachorro',
      dateDelivery: '15/03/2020',
      dateConclusion: '',
      status: false,
      description:
        'quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popular',
    },
    {
      id: '124',
      name: 'Passear com o papagaio',
      dateDelivery: '15/03/2020',
      dateConclusion: '20/05/2020',
      status: true,
      description:
        'mico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um p',
    },
    {
      id: '125',
      name: 'Passear com o gato',
      dateDelivery: '15/03/2020',
      dateConclusion: '',
      status: false,
      description:
        ' uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conte',
    },
    {
      id: '126',
      name: 'Passear com o periquito',
      dateDelivery: '15/03/2020',
      dateConclusion: '20/05/2020',
      status: true,
      description:
        'uitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, p',
    },
    {
      id: '127',
      name: 'Passear com a mulher',
      dateDelivery: '15/03/2020',
      dateConclusion: '',
      status: false,
      description:
        ' uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conte',
    },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // const idUser = localStorage.getItem('idUser');
    // const dataList = api.get(`/list-tasks/${idUser}`);
    // setListTasks(dataList.data);
    setListTasks(
      listTasks.map(task => {
        task.toViewTask = false;
        return task;
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toViewTaskAction = useCallback(
    id => {
      setListTasks(
        listTasks.map(task => {
          if (task.id === id) {
            task.toViewTask
              ? (task.toViewTask = false)
              : (task.toViewTask = true);
            return task;
          }
          return task;
        }),
      );
    },
    [listTasks],
  );

  const RemoveTaskList = useCallback(
    async id => {
      try {
        // await api.delete(`/delete/${id}`);

        setListTasks(listTasks.filter(task => task.id !== id));
      } catch (error) {
        console.log(error);
      }
    },
    [listTasks],
  );

  const ConfimeTask = useCallback(
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

      const dateToday = format(new Date(), 'dd/MM/yyy');

      setListTasks(
        listTasks.map(task => {
          if (task.id === id) {
            !status
              ? (task.dateConclusion = dateToday)
              : (task.dateConclusion = '');
            task.status ? (task.status = false) : (task.status = true);
            return task;
          }
          return task;
        }),
      );
      console.log(listTasks);
    },
    [listTasks],
  );

  const openModal = useCallback(() => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  }, [modalIsOpen]);

  return (
    <Container>
      <ContainerList>
        <h1>ListTasks</h1>
        <AreaButonGegister>
          <button onClick={openModal} type="button">
            Cadastrar nova tarefa
            <FaTasks size={30} color="#50758d" />
          </button>
        </AreaButonGegister>

        <ul>
          {listTasks.map(task => (
            <ListItem key={task.id}>
              <div>
                <div>
                  <Button
                    onClick={() => ConfimeTask(task.id, task.status)}
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
                  <Button onClick={() => RemoveTaskList(task.id)} type="button">
                    <FaTrash size={25} color="#50758d" />
                  </Button>

                  <Button
                    onClick={() => toViewTaskAction(task.id)}
                    type="button"
                  >
                    <FaEye size={25} color="#50758d" />
                  </Button>

                  <Button type="button">
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
                      <strong>Data da entrega: </strong> {task.dateDelivery}
                    </span>
                    <span>
                      <strong>Data da conclusão: </strong>
                      {task.dateConclusion
                        ? task.dateConclusion
                        : 'Aguardando Conclusão'}
                    </span>
                  </div>
                </AreaVisualizationTask>
              )}
            </ListItem>
          ))}
        </ul>
      </ContainerList>
      <Modal dataProp="propModal" modalOpen={modalIsOpen} />
    </Container>
  );
};

export default ListTasks;
