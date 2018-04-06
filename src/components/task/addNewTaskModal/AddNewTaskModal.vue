<template>
  <div>
    <b-modal :id="id"
             :title="title"
             hide-footer
             ref="AddNewTaskRef">
      <div class="d-block">
        <b-form>
          <b-form-group id="AddNewTaskTitleGroup"
                        label="Title:"
                        label-for="AddNewTaskTitle">
            <b-form-input id="AddNewTaskTitle"
                          autofocus
                          placeholder="Please enter title"
                          required
                          type="text"
                          v-model="form.title"
            />
          </b-form-group>
          <b-form-group id="AddNewTaskDescriptionGroup"
                        label="Description:"
                        label-for="AddNewTaskDescription">
            <b-form-textarea id="AddNewTaskDescription"
                             placeholder="Enter description if it is needed"
                             :rows="3"
                             v-model="form.description">
            </b-form-textarea>
          </b-form-group>
          <b-button v-if="form.mode === 'create'"
                    type="submit"
                    variant="primary"
                    @click.prevent="AddNewTask">
            Add
          </b-button>
          <b-button v-else-if="form.mode === 'edit'"
                    type="submit"
                    variant="primary"
                    @click.prevent="UpdateTask">
            Edit
          </b-button>
          <b-button type="button"
                    variant="danger"
                    @click="hideModal">
            Cancel
          </b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
const UPDATE_TASK_TEXT = 'Update task';
const CREATE_TASK_TEXT = 'Create new task';

export default {
  name: 'AddNewTaskModal',
  props: ['id', 'onAddNewTask', 'onUpdateTask'],
  data () {
    return {
      form: {
        title: '',
        description: '',
        board: '',
        mode: ''
      }
    };
  },
  computed: {
    title: function () {
      let title = '';
      switch (this.$data.form.mode) {
        case 'create':
          title = CREATE_TASK_TEXT;
          break;
        case 'edit':
          title = UPDATE_TASK_TEXT;
          break;
        default:
          title = CREATE_TASK_TEXT;
          break;
      }

      return title;
    }
  },
  methods: {
    AddNewTask (e) {
      this.$props.onAddNewTask(this.$data.form).then(() => {
        this.hideModal();
      });
    },
    UpdateTask (e) {
      this.$props.onUpdateTask(this.$data.form).then(() => {
        this.hideModal();
      });
    },
    showModal (data) {
      this.$data.form = Object.assign(this.$data.form, data);

      this.$refs.AddNewTaskRef.show();
    },
    hideModal () {
      this.$refs.AddNewTaskRef.hide();
    }
  }
};
</script>
