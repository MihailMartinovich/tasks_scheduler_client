<template>
  <b-modal :visible="visible"
           :title="title"
           hide-footer
           @hidden="hidden"
           ref="BoardDetailsRef">
    <div class="d-block">
      <div class="description-container">
        {{description }}
      </div>

      <Draggable v-model="tasks">
        <TaskContainer v-for="(task, index) in tasks"
                       v-bind:key="index"
                       :task="task"
                       :useTimeoutForDescription="true">
        </TaskContainer>
      </Draggable>
    </div>
  </b-modal>
</template>

<script>
import TaskContainer from '../../task/task/TaskContainer.vue';
import Draggable from 'vuedraggable';

function compare (a, b) {
  return a.order - b.order;
}

export default {
  name: 'BoardDetailsModal',
  props: ['board', 'hidden', 'onUpdateTaskList'],
  components: { TaskContainer, Draggable },
  computed: {
    visible: function () {
      return !!this.$props.board;
    },
    tasks: {
      get () {
        let tasks = (this.$props.board && this.$props.board.tasks) || [];
        return tasks.sort(compare);
      },
      set (data) {
        this.$props.onUpdateTaskList(data);
      }
    },
    title: function () {
      return this.$props.board && this.$props.board.title;
    },
    description: function () {
      return this.$props.board && this.$props.board.description;
    }
  }
};
</script>
<style scoped lang="scss">
@import '../../../styles/variables';

.task-container {
  &:not(:last-child){
    border: 1px $border-color solid;
  }
}
</style>
