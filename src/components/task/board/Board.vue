<template>
  <div class="board">
  <div class="board-inner">
    <div class="board-header">
      <h2 @click="goToBoardDetails(board._id)">
        {{ board.title }}
      </h2>
      <div class="board-controls">
        <b-button-group class="board-controls-group">
          <b-button type="button"
                    variant="danger"
                    size="sm"
                    @click="onDelete">
            <Icon name="trash-alt"></Icon>
          </b-button>
          <b-button type="button"
                    variant="primary"
                    size="sm"
                    @click="onAddTask">
            <Icon name="plus"></Icon>
          </b-button>
        </b-button-group>

        <div class="board-task-view-mode"
             v-if="isFilterEnabled">
          <b-dropdown size="sm">
            <template slot="text">
              <Icon name='align-right'></Icon>
            </template>
          </b-dropdown>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <Draggable v-model="tasks"
               @start="drag=true"
               @end="drag=false">
      <TaskContainer v-for="(task, index) in tasks"
                   v-bind:key="index"
                   :task="task">
      </TaskContainer>
    </Draggable>
  </div>
  </div>
</template>

<script>
import TaskContainer from '../task/TaskContainer';
import Draggable from 'vuedraggable';
import Icon from 'vue-awesome';

function compare (a, b) {
  return a.order - b.order;
}

export default {
  name: 'Board',
  components: { TaskContainer, Draggable, Icon },
  props: ['board', 'onDelete', 'onAddTask', 'goToBoardDetails', 'onUpdateTaskList'],
  computed: {
    tasks: {
      get () {
        let tasks = this.board.tasks;
        return tasks.sort(compare);
      },
      set (data) {
        this.$props.onUpdateTaskList(data);
      }
    },
    isFilterEnabled: function () {
      return !!this.$props.board.tasks.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../styles/variables';
.board {
  min-width: 270px;
  border-radius: $border-radius;

  .board-inner {
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
    border-radius: $border-radius;
    background: lightgrey;
    max-height: 100%;
    overflow-y: auto;

    .board-header {
      position: sticky;
      top: 0;
      background: inherit;
      padding-top: 10px;
      z-index: 1;

      .board-controls {
        margin-bottom: 10px;
        .board-controls-group {
          float: left;
        }
      }

      .board-task-view-mode {
        float: right;
      }
    }
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
