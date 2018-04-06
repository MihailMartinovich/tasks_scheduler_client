<template>
  <b-modal :visible="visible"
           :title="board.title"
           hide-footer
           @hidden="hidden"
           ref="BoardDetailsRef">
    <div class="d-block">
      {{ board.description }}

      <Draggable v-model="tasks"
                 @start="drag=true"
                 @end="drag=false">
        <TaskContainer v-for="(task, index) in tasks"
                       v-bind:key="index"
                       :task="task">
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
        let tasks = this.$props.board.tasks;
        return tasks.sort(compare);
      },
      set (data) {
        this.$props.onUpdateTaskList(data);
      }
    }
  }
};
</script>
