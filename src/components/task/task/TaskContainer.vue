<template>
  <div class="task-container">
    <Task :task="task"
          :onDelete="onDelete"
          :onUpdate="onUpdate"
          :onOpenEditModal="onOpenEditModal"
          :goToTaskDetails="goToTaskDetails"/>
  </div>
</template>

<script>
import Task from './Task';
import ActionTypes from '@/constants/actionTypesConstants';
import { EventBus } from '../../../services/eventBus';
import EventConstants from '../../../constants/eventConstants';

export default {
  name: 'TaskContainer',
  components: { Task },
  props: [ 'task' ],
  methods: {
    onUpdate: function (task) {
      this.$store.dispatch(ActionTypes.UPDATE_TASK, task);
    },
    onDelete: function (id) {
      return this.$store.dispatch(ActionTypes.DELETE_TASK, id);
    },
    onOpenEditModal (task) {
      EventBus.$emit(EventConstants.OPEN_TASK_MODAL, Object.assign({}, task, { mode: 'edit' }));
    },
    goToTaskDetails (id) {
      this.$router.push({name: 'TaskDetails', params: { id }});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../styles/variables';
.task-container {
  border-radius: $border-radius;

  &:not(:last-child) {
  margin-bottom: 10px;
   }
}
</style>
