<template>
  <TaskListItem/>
</template>

<script>
import TaskListItem from './TaskListItem';

export default {
  name: 'TaskListItemContainer',
  components: { TaskListItem },
  data () {
    return {
      msg: 'Task List Item Container'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
