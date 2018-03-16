<template>
  <div class="task-container">
    <h3>{{ msg }}</h3>
    <TaskItem />
  </div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TaskItemContainer',
  components: { TaskItem },
  data () {
    return {
      msg: 'Task Item Container'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
