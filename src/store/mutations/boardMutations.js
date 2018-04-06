import MutationTypes from '@/constants/mutationTypesConstants';

export default {
  [MutationTypes.ADD_NEW_BOARD]: (state, data) => {
    state.board.boardList.push(data);
  },
  [MutationTypes.SET_BOARD_LIST]: (state, data) => {
    state.board.boardList = data;
  },
  [MutationTypes.REMOVE_BOARD]: (state, data) => {
    const id = data;
    state.board.boardList = state.board.boardList.filter((item) => {
      return item._id !== id;
    });
  },
  [MutationTypes.SET_CURRENT_BOARD]: (state, data) => {
    state.board.currentBoard = data;
  },
  [MutationTypes.RESET_CURRENT_BOARD]: (state) => {
    state.board.currentBoard = null;
  }
};
