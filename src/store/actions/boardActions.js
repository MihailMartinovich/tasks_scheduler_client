import ActionTypes from '@/constants/actionTypesConstants';
import MutationTypes from '@/constants/mutationTypesConstants';
import BoardApiService from '@/apiServices/boardApiService';

export default {
  [ActionTypes.ADD_NEW_BOARD]: (context, data) => {
    return BoardApiService.createBoard(data)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.ADD_NEW_BOARD, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.GET_ALL_BOARDS]: (context) => {
    return BoardApiService.getAllBoards()
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.SET_BOARD_LIST, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.DELETE_BOARD]: (context, id) => {
    return BoardApiService.deleteBoard(id)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.REMOVE_BOARD, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.GET_BOARD]: (context, id) => {
    return BoardApiService.getBoard(id)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.SET_CURRENT_BOARD, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.RESET_CURRENT_BOARD]: (context) => {
    context.commit(MutationTypes.RESET_CURRENT_BOARD);
  },
  [ActionTypes.UPDATE_BOARD_LIST]: (context, data) => {
    if (!data.length) {
      return;
    }

    context.commit(MutationTypes.SET_BOARD_LIST, data);

    return BoardApiService.updateBoards(data)
      .then(response => {
        return Promise.resolve(context.commit(MutationTypes.SET_BOARD_LIST, response.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
};
