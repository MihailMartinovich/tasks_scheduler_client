<template>
  <div id="taskListContainer">
    <h1>{{ msg }}</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from './TaskList'

export default {
  name: 'TaskListContainer',
  components: { TaskList },
  data () {
    return {
      msg: 'Task List Container'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
