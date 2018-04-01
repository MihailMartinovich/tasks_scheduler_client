<template>
  <div class="task-item-container">
    <h3>{{ msg }}</h3>
    <Task :task="task"
          :onDelete="onDelete"
          :onUpdate="onUpdate"/>
  </div>
</template>

<script>
import Task from './Task';
import ActionTypes from '@/constants/actionTypesConstants';

export default {
  name: 'TaskContainer',
  components: { Task },
  props: [ 'task' ],
  data () {
    return {
      msg: 'Task Container'
    };
  },
  methods: {
    onUpdate: function (task) {

    },
    onDelete: function (id) {
      return this.$store.dispatch(ActionTypes.DELETE_TASK, id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-item-container {

}
</style>
