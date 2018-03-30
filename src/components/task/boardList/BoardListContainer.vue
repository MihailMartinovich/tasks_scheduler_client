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
                        :title="modalTitle"
                        :onSubmit="addNewBoard">
      </AddNewBoardModal>
    </div>
    <BoardList />
  </div>
</template>

<script>
import BoardList from './BoardList';
import AddNewBoardModal from '../addNewBoardModal/AddNewBoardModal';
import ActionTypes from '@/constants/actionTypesConstants';

export default {
  name: 'BoardListContainer',
  components: { BoardList, AddNewBoardModal },
  data () {
    return {
      title: 'Board List Container',
      modalTitle: 'Add new board'
    };
  },
  methods: {
    addNewBoard: function (data) {
      return this.$store.dispatch(ActionTypes.ADD_NEW_BOARD, data);
    }
  },
  created () {
    this.$store.dispatch(ActionTypes.GET_ALL_BOARDS);
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
