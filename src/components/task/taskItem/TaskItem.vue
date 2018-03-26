<template>
  <div class="task-item">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  data () {
    return {
      msg: 'Task item'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
