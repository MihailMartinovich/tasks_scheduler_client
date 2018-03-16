<template>
  <div class="task-list">
    <h2>{{ msg }}</h2>
    <TaskItemContainer  />
  </div>
</template>

<script>
import TaskItemContainer from '../taskItem/TaskItemContainer'

export default {
  name: 'TaskListItem',
  components: { TaskItemContainer },
  data () {
    return {
      msg: 'Task List Item'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-list {
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.task-list:not(:last-child){
  margin-right: 10px;
}
</style>
