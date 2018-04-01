<template>
  <div class="task-item">
    <b-form-checkbox id="checkbox1"
                     v-model="task.completed"
                     value="true"
                     unchecked-value="false">
    </b-form-checkbox>
    <span>{{ task.title }}</span>
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
  props: ['task', 'onUpdate', 'onDelete']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
