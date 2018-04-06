import ActionTypes from '@/constants/actionTypesConstants';
import MutationTypes from '@/constants/mutationTypesConstants';
import TaskApiService from '@/apiServices/taskApiService';

export default {
  [ActionTypes.ADD_NEW_TASK]: (context, data) => {
    return TaskApiService.createTask(data)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.ADD_NEW_TASK, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.GET_ALL_TASKS]: (context, boardId) => {
    return TaskApiService.getTasks(boardId)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.SET_BOARD_TA, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.GET_TASK]: (context, id) => {
    return TaskApiService.getTask(id)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.SET_CURRENT_TASK, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.DELETE_TASK]: (context, id) => {
    return TaskApiService.deleteTask(id)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.REMOVE_TASK, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.UPDATE_TASK]: (context, data) => {
    return TaskApiService.updateTask(data._id, data)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.UPDATE_TASK, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.RESET_CURRENT_TASK]: (context) => {
    context.commit(MutationTypes.RESET_CURRENT_TASK);
  },
  [ActionTypes.UPDATE_TASK_LIST]: (context, data) => {
    if (!data.length) {
      return;
    }
    context.commit(MutationTypes.UPDATE_TASK_LIST, data);

    return TaskApiService.updateTasks(data)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.UPDATE_TASK_LIST, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
};
