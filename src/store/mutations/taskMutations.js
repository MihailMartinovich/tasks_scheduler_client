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
    state.task.currentTask = data;
  },
  [MutationTypes.RESET_CURRENT_TASK]: (state, data) => {
    state.task.currentTask = null;
  },
  [MutationTypes.REMOVE_TASK]: (state, data) => {
    let board = state.board.boardList.find((item) => {
      return item._id === data.board;
    });

    board.tasks = board.tasks.filter((item) => {
      return item._id !== data._id;
    });

    state.board.boardList = Object.assign([], state.board.boardList);
  },
  [MutationTypes.UPDATE_TASK]: (state, data) => {
    let board = state.board.boardList.find((item) => {
      return item._id === data.board;
    });

    let task = board.tasks.find((item) => {
      return item._id === data._id;
    });

    Object.assign(task, data);

    if (state.board.currentBoard && state.board.currentBoard._id === board._id) {
      state.board.currentBoard.tasks = Object.assign([], board.tasks);
    }

    state.board.boardList = Object.assign([], state.board.boardList);
  },
  [MutationTypes.UPDATE_TASK_LIST]: (state, data) => {
    if (!data.length) {
      return;
    }

    let board = state.board.boardList.find((item) => {
      return item._id === data[0].board;
    });

    board.tasks = data;

    state.board.boardList = Object.assign([], state.board.boardList);
  }
};
