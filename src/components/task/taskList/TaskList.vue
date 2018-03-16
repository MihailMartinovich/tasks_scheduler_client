<template>
  <div class="task-list">
    <TaskListItemContainer v-for="(listItem, index) in listItems"
                           v-bind:key="index">
      {{index}} {{listItem}}
    </TaskListItemContainer>
  </div>
</template>

<script>
import TaskListItemContainer from '../taskListItem/TaskListItemContainer'

export default {
  name: 'TaskList',
  components: { TaskListItemContainer },
  data () {
    return {
      msg: 'Task List',
      listItems: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-list {
  display: flex;
  flex-direction: row;
  overflow-y: auto;
}
</style>
