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
  // [ActionTypes.GET_ALL_TASKS]: (context) => {
  //   return TaskApiService.getTasks()
  //     .then(response => {
  //       return Promise.resolve(context.commit(MutationTypes.SET_BOARD_TA, response.data));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
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
  }
};
