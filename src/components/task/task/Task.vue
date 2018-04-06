<template>
  <div class="task-item">
    <b-form-group>
      <b-form-checkbox :id="'id-' + task._id"
                       v-model="task.completed"
                       value="true"
                       unchecked-value="false"
                       @input="onUpdate(task)">
        {{ task.title }}
      </b-form-checkbox>
      <span @click.stop="goToTaskDetails(task._id)">
        Open
      </span>
      <b-button @click="onOpenEditModal(task)"
                :size="'sm'"
                :variant="'success'">
        Edit
      </b-button>
    </b-form-group>
    <div>{{ task.description }}</div>
    <b-button @click="onDelete(task._id)"
              :size="'sm'"
              :variant="'danger'">
      X
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task', 'onUpdate', 'onDelete', 'onOpenEditModal', 'goToTaskDetails']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
