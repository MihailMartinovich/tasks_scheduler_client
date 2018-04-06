<template>
  <Board :board="board"
         :on-delete="deleteBoard"
         :onAddTask="onAddTask"
         :goToBoardDetails="goToBoardDetails"
         :onUpdateTaskList="onUpdateTaskList"/>
</template>

<script>
import Board from './Board';
import ActionTypes from '@/constants/actionTypesConstants';
import { EventBus } from '../../../services/eventBus';
import EventConstants from '../../../constants/eventConstants';

export default {
  name: 'BoardContainer',
  components: { Board },
  props: ['board'],
  methods: {
    deleteBoard () {
      return this.$store.dispatch(ActionTypes.DELETE_BOARD, this.board._id);
    },
    onAddTask () {
      EventBus.$emit(EventConstants.OPEN_TASK_MODAL, {
        board: this.board._id,
        mode: 'create'
      });
    },
    goToBoardDetails (id) {
      this.$router.push({name: 'BoardDetails', params: { id }});
    },
    onUpdateTaskList (data) {
      data.forEach((item, i) => {
        item.order = ++i;
      });
      this.$store.dispatch(ActionTypes.UPDATE_TASK_LIST, data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
