<template>
  <div id="taskListContainer">
    <div class="title-container">
      <span class="title">{{ title }}</span>
      <b-button :size="'sm'"
                :variant="'secondary'"
                v-b-modal.AddNewBoardModal>
        Add new list
      </b-button>
      <AddNewBoardModal :id="'AddNewBoardModal'"
                        :title="addBoardModalTitle"
                        :onSubmit="addNewBoard">
      </AddNewBoardModal>
      <AddNewTaskModal :id="'AddNewTaskModal'"
                       :title="addTaskModalTitle"
                       :onSubmit="addNewTask"
                       ref="addNewTaskModal"/>
    </div>
    <BoardList />
  </div>
</template>

<script>
import BoardList from './BoardList';
import AddNewBoardModal from '../addNewBoardModal/AddNewBoardModal';
import AddNewTaskModal from '../addNewTaskModal/AddNewTaskModal.vue';
import ActionTypes from '@/constants/actionTypesConstants';
import { EventBus } from '../../../services/eventBus';

export default {
  name: 'BoardListContainer',
  components: { BoardList, AddNewBoardModal, AddNewTaskModal },
  data () {
    return {
      title: 'Board List Container',
      addBoardModalTitle: 'Add new board',
      addTaskModalTitle: 'Add new task'
    };
  },
  methods: {
    addNewBoard: function (data) {
      return this.$store.dispatch(ActionTypes.ADD_NEW_BOARD, data);
    },
    addNewTask: function (data) {
      return this.$store.dispatch(ActionTypes.ADD_NEW_TASK, data);
    },
    openAddNewTaskModal: function (data) {
      this.$refs.addNewTaskModal.showModal(data);
    }
  },
  created () {
    this.$store.dispatch(ActionTypes.GET_ALL_BOARDS);
    EventBus.$on('openAddNewTaskModal', this.openAddNewTaskModal);
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
