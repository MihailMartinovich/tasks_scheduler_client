<template>
  <b-modal :visible="visible"
           :title="task.title"
           hide-footer
           @hidden="hidden"
           ref="BoardDetailsRef">
    <div class="d-block">
      {{ task.description }}
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'BoardDetailsModal',
  props: ['task', 'hidden'],
  computed: {
    visible: function () {
      return !!this.$props.task;
    }
  }
};
</script>
