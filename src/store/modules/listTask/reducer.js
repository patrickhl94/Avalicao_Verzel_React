import { format, isBefore, parseISO } from 'date-fns';
import produce from 'immer';

function listTask(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return produce(state, draft => {
        draft.push(action.task);
      });
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    case 'UPTADE_TASK':
      return produce(state, draft => {
        const taskIndex = draft.findIndex(task => task.id === action.id);

        if (taskIndex >= 0) {
          draft[taskIndex] = {
            ...draft[taskIndex],
            ...action.task,
            status: action.task.dateConclusion
              ? !!isBefore(parseISO(action.task.dateConclusion), new Date())
              : false,
          };
        }
      });
    case 'UPDATE_STATUS_VIEW':
      return produce(state, draft => {
        const index = draft.findIndex(task => task.id === action.id);
        if (index >= 0) {
          draft[index].toViewTask = !draft[index].toViewTask;
        }
      });
    case 'UPDATE_STATUS_TASK':
      return produce(state, draft => {
        const index = draft.findIndex(task => task.id === action.id);

        if (index >= 0) {
          draft[index].status = !draft[index].status;

          draft[index].status
            ? (draft[index].dateConclusion = format(new Date(), 'yyyy-MM-dd'))
            : (draft[index].dateConclusion = '');
        }
      });
    case 'CLEAR_ALL_TASKS':
      return [];
    default:
      return state;
  }
}

export default listTask;
