import MutationTypes from '@/constants/mutationTypesConstants';

export default {
  [MutationTypes.ADD_NEW_TASK]: (state, data) => {
    let board = state.board.boardList.find((item) => {
      return item._id === data.board;
    });

    board.tasks.push(data);

    state.board.boardList = Object.assign([], state.board.boardList);
  },
  [MutationTypes.SET_CURRENT_TASK]: (state, data) => {
    state.board.boardList = data;
  },
  [MutationTypes.REMOVE_TASK]: (state, data) => {
    let board = state.board.boardList.find((item) => {
      return item._id === data.board;
    });

    board.tasks = board.tasks.filter((item) => {
      return item._id !== data._id;
    });

    state.board.boardList = Object.assign([], state.board.boardList);
  }
};
