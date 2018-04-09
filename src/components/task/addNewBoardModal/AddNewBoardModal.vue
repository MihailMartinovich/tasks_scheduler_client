<template>
  <div>
    <b-modal :id="id"
             :title="title"
             hide-footer
             ref="AddNewBoardRef">
      <div class="d-block">
        <b-form>
          <b-form-group id="addNewBoardTitleGroup"
                        label="Title:"
                        label-for="addNewBoardTitle">
            <b-form-input id="addNewBoardTitle"
                          autofocus
                          placeholder="Please enter title"
                          required
                          type="text"
                          v-model.trim="form.title"
            />
          </b-form-group>
          <b-form-group id="addNewBoardDescriptionGroup"
                        label="Description:"
                        label-for="addNewBoardDescription">
            <b-form-textarea id="addNewBoardDescription"
                             placeholder="Enter description if it is needed"
                             :rows="3"
                             v-model="form.description">
            </b-form-textarea>
          </b-form-group>
          <b-button type="submit"
                    variant="primary"
                    @click.prevent="addNewBoard">
            Add
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
export default {
  name: 'AddNewBoardModal',
  props: ['id', 'title', 'onSubmit'],
  data () {
    return {
      form: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    addNewBoard (e) {
      this.$props.onSubmit(this.$data.form).then(() => {
        this.hideModal();
      });
    },
    showModal () {
      this.$refs.AddNewBoardRef.show();
    },
    hideModal () {
      this.$refs.AddNewBoardRef.hide();
    }
  }
};
</script>
