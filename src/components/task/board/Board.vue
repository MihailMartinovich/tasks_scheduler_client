<template>
  <div class="task-list-item">
    <h2>{{ board.title }}
      <b-button type="button"
                variant="danger"
                @click="onDelete">
        delete
      </b-button>
    </h2>
    <TaskContainer v-for="(task, index) in board.tasks"
                   v-bind:key="index"
                   :task="task"/>
    <b-button type="button"
              variant="primary"
              @click="onAddTask">
      +
    </b-button>
  </div>
</template>

<script>
import TaskContainer from '../task/TaskContainer';

export default {
  name: 'Board',
  components: { TaskContainer },
  props: ['board', 'onDelete', 'onAddTask']
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
