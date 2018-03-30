<template>
  <div class="task-list">
    <BoardContainer v-for="(board, index) in boards"
                           v-bind:key="index"
                           :board="board">

    </BoardContainer>
  </div>
</template>

<script>
import BoardContainer from '../board/BoardContainer';

export default {
  name: 'BoardList',
  components: { BoardContainer },
  computed: {
    boards () {
      return this.$store.state.board.boardList;
    }
  },
  data () {
    return {
      msg: 'Board List'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-list {
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  height: 100%;
}
</style>
