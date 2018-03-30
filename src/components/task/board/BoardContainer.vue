<template>
  <Board :board="board"
         :on-delete="deleteBoard"/>
</template>

<script>
import Board from './Board';
import ActionTypes from '@/constants/actionTypesConstants';

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
    deleteBoard (id) {
      return this.$store.dispatch(ActionTypes.DELETE_BOARD, id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
