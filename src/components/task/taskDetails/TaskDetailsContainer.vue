<template>
  <TaskDetailsModal :task="task"
                    :hidden="onHidden"/>
</template>

<script>
import ActionTypes from '@/constants/actionTypesConstants';
import TaskDetailsModal from '../../common/taskDetailsModal/TaskDetailsModal.vue';

export default {
  name: 'TaskDetails',
  components: { TaskDetailsModal },
  computed: {
    task: function () {
      return this.$store.state.task.currentTask;
    }
  },
  methods: {
    onHidden: function () {
      this.$router.go(-1);
      this.$store.dispatch(ActionTypes.RESET_CURRENT_TASK);
    }
  },
  created () {
    this.$store.dispatch(ActionTypes.GET_TASK, this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #taskListContainer {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
