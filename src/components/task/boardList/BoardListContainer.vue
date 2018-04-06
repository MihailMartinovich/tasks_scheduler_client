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
                       :onAddNewTask="addNewTask"
                       :onUpdateTask="onUpdateTask"
                       ref="addNewTaskModal"/>
    </div>
    <BoardList :onUpdateBoardList="onUpdateBoardList"/>
    <router-view></router-view>
  </div>
</template>

<script>
import BoardList from './BoardList';
import AddNewBoardModal from '../addNewBoardModal/AddNewBoardModal';
import AddNewTaskModal from '../addNewTaskModal/AddNewTaskModal.vue';
import ActionTypes from '@/constants/actionTypesConstants';
import { EventBus } from '../../../services/eventBus';
import EventConstants from '../../../constants/eventConstants';

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
    onUpdateTask: function (data) {
      return this.$store.dispatch(ActionTypes.UPDATE_TASK, data);
    },
    openTaskModal: function (data) {
      this.$refs.addNewTaskModal.showModal(data);
    },
    onUpdateBoardList (data) {
      data.forEach((item, i) => {
        item.order = ++i;
      });

      this.$store.dispatch(ActionTypes.UPDATE_BOARD_LIST, data);
    }
  },
  created () {
    this.$store.dispatch(ActionTypes.GET_ALL_BOARDS);
    EventBus.$on(EventConstants.OPEN_TASK_MODAL, this.openTaskModal);
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
