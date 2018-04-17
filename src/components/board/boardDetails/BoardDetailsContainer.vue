<template>
  <BoardDetailsModal :board="board"
                     :hidden="onHidden"
                     :onUpdateTaskList="onUpdateTaskList"/>
</template>

<script>
import ActionTypes from '@/constants/actionTypesConstants';
// import { EventBus } from '../../../services/eventBus';
// import EventConstants from '../../../constants/eventConstants';
import BoardDetailsModal from '../../common/boardDetailsModal/BoardDetailsModal.vue';

export default {
  name: 'BoardDetails',
  components: { BoardDetailsModal },
  computed: {
    board: function () {
      return this.$store.state.board.currentBoard;
    }
  },
  methods: {
    onHidden: function () {
      this.$router.go(-1);
      this.$store.dispatch(ActionTypes.RESET_CURRENT_BOARD);
    },
    onUpdateTaskList (data) {
      data.forEach((item, i) => {
        item.order = ++i;
      });
      this.$store.dispatch(ActionTypes.UPDATE_TASK_LIST, data);
    }
  },
  created () {
    this.$store.dispatch(ActionTypes.GET_BOARD, this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #taskListContainer {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
