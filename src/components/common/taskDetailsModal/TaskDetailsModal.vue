<template>
  <b-modal :visible="visible"
           :title="title"
           hide-footer
           @hidden="hidden"
           ref="BoardDetailsRef">
    <div class="d-block">
      <div class="description-container">
        {{ description }}
      </div>
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
    },
    title: function () {
      return this.$props.task && this.$props.task.title;
    },
    description: function () {
      return this.$props.task && this.$props.task.description;
    }
  }
};
</script>
