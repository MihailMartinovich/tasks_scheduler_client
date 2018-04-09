<template>
  <div class="task">
    <b-form-group>
      <b-form-checkbox :id="'id-' + task._id"
                       v-model="task.completed"
                       value="true"
                       unchecked-value="false"
                       @input="onUpdate(task)">
        {{ task.title }}
      </b-form-checkbox>
    </b-form-group>
    <div>{{ task.description }}</div>

    <div class="task-controls">
      <b-button-group class="task-controls-group">
        <b-button @click="onOpenEditModal(task)"
                  :size="'sm'"
                  :variant="'success'"
                  :title="'edit task'">
          <Icon name="edit"></Icon>
        </b-button>
        <b-button @click.stop="goToTaskDetails(task._id)"
                  :size="'sm'"
                  :variant="'secondary'"
                  :title="'show task details'">
          <Icon name="ellipsis-h"></Icon>
        </b-button>
        <b-button @click="onDelete(task._id)"
                  :size="'sm'"
                  :variant="'danger'"
                  :title="'delete task'">
          <Icon name="trash-alt"></Icon>
        </b-button>
      </b-button-group>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome';

export default {
  name: 'Task',
  props: ['task', 'onUpdate', 'onDelete', 'onOpenEditModal', 'goToTaskDetails'],
  components: { Icon }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../styles/variables';

.task {
  padding: 10px;
  border-radius: $border-radius;
  background: white;

  .task-controls {
    .task-controls-group {
      float: right;
    }
  }
}
</style>
