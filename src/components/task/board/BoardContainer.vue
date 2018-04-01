<template>
  <Board :board="board"
         :on-delete="deleteBoard"
         :onAddTask="onAddTask"/>
</template>

<script>
import Board from './Board';
import ActionTypes from '@/constants/actionTypesConstants';
import { EventBus } from '../../../services/eventBus';

export default {
  name: 'BoardContainer',
  components: { Board },
  props: ['board'],
  data () {
    return {
      msg: 'Board Container'
    };
  },
  methods: {
    deleteBoard () {
      return this.$store.dispatch(ActionTypes.DELETE_BOARD, this.board._id);
    },
    onAddTask () {
      EventBus.$emit('openAddNewTaskModal', { board: this.board._id });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
