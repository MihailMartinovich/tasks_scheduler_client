<template>
  <div class="task-list-item">
    <h2 @click="goToBoardDetails(board._id)">{{ board.title }}
      <b-button type="button"
                variant="danger"
                @click="onDelete">
        delete
      </b-button>
    </h2>
    <Draggable v-model="tasks"
               @start="drag=true"
               @end="drag=false">
      <TaskContainer v-for="(task, index) in tasks"
                   v-bind:key="index"
                   :task="task">
      </TaskContainer>
    </Draggable>
    <b-button type="button"
              variant="primary"
              @click="onAddTask">
      +
    </b-button>
  </div>
</template>

<script>
import TaskContainer from '../task/TaskContainer';
import Draggable from 'vuedraggable';

function compare (a, b) {
  return a.order - b.order;
}

export default {
  name: 'Board',
  components: { TaskContainer, Draggable },
  props: ['board', 'onDelete', 'onAddTask', 'goToBoardDetails', 'onUpdateTaskList'],
  computed: {
    tasks: {
      get () {
        let tasks = this.board.tasks;
        return tasks.sort(compare);
      },
      set (data) {
        this.$props.onUpdateTaskList(data);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-list-item {
  overflow-y: auto;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.task-list-item:not(:last-child){
  margin-right: 10px;
}
</style>
