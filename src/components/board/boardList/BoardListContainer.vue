<template>
  <div class="board-list-container">
    <div class="board-list-container-inner">
      <div class="title-container">
        <h1 class="title">{{ title }}
          <b-button class="add-new-board-button"
                    :size="'sm'"
                    :variant="'secondary'"
                    v-b-modal.AddNewBoardModal
                    :title="'click to add new board'">
            <Icon name="plus"></Icon>
          </b-button>
        </h1>

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
    </div>
</template>

<script>
import BoardList from './BoardList';
import AddNewBoardModal from '../addNewBoardModal/AddNewBoardModal';
import AddNewTaskModal from '../../task/addNewTaskModal/AddNewTaskModal.vue';
import ActionTypes from '@/constants/actionTypesConstants';
import { EventBus } from '../../../services/eventBus';
import EventConstants from '../../../constants/eventConstants';
import Icon from 'vue-awesome';

function setNewOrder (data) {
  let sortedData = Object.assign([], data);
  sortedData.forEach((item, i) => {
    item.order = ++i;
  });
  return sortedData;
}

export default {
  name: 'BoardListContainer',
  components: { BoardList, AddNewBoardModal, AddNewTaskModal, Icon },
  data () {
    return {
      title: 'What are your goals for today?',
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
      this.$store.dispatch(ActionTypes.UPDATE_BOARD_LIST, setNewOrder(data));
    }
  },
  created () {
    this.$store.dispatch(ActionTypes.GET_ALL_BOARDS);
    EventBus.$on(EventConstants.OPEN_TASK_MODAL, this.openTaskModal);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board-list-container {
  position: relative;
  height: 100%;
  width: 100%;

  .board-list-container-inner {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .title-container {
      margin-bottom: 10px;

    }
  }
}
</style>
