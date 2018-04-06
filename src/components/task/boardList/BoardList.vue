<template>
  <Draggable class="task-list"
             v-model="boards"
             @start="drag=true"
             @end="drag=false">
    <BoardContainer v-for="(board, index) in boards"
                           v-bind:key="index"
                           :board="board">
    </BoardContainer>
  </Draggable>
</template>

<script>
import BoardContainer from '../board/BoardContainer';
import Draggable from 'vuedraggable';
function compare (a, b) {
  return a.order - b.order;
}

export default {
  name: 'BoardList',
  components: { BoardContainer, Draggable },
  props: ['onUpdateBoardList'],
  computed: {
    boards: {
      get () {
        let boards = this.$store.state.board.boardList;
        return boards.sort(compare);
      },
      set (data) {
        this.$props.onUpdateBoardList(data);
      }
    }
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
