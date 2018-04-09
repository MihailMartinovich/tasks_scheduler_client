<template>
<div class="board">
  <div class="board-inner">
    <div class="board-header">
      <h5 @click="goToBoardDetails(board._id)"
          class="board-title-container">
      <span class="board-title">
        {{ board.title }}
      </span>
        <transition name="slide-fade">
          <b-badge v-if="isCompleted"
                   variant="success"
                   class="success-badge">
            Completed
          </b-badge>
        </transition>
      </h5>
      <div class="board-controls">
        <b-button-group class="board-controls-group">
          <b-button type="button"
                    variant="secondary"
                    size="sm"
                    @click="onAddTask">
            <Icon name="plus"></Icon>
          </b-button>
          <b-button type="button"
                    variant="danger"
                    size="sm"
                    @click="onDelete">
            <Icon name="trash-alt"></Icon>
          </b-button>
        </b-button-group>

        <div class="board-task-view-mode"
             v-if="isFilterEnabled">
          <b-form-select v-model="selected"
                         size="sm"
                         :options="options">
            <Icon name='align-right'></Icon>
          </b-form-select>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <Draggable v-model="tasks"
               :move="onMove"
               @start="drag=true"
               @end="drag=false">
      <transition-group name="fade">
        <TaskContainer v-for="(task, index) in tasks"
                       v-bind:key="index"
                       :task="task">
        </TaskContainer>
      </transition-group>
    </Draggable>
    <div class="empty-task"
         v-if="!board.tasks.length">
      Please add your first task!
    </div>
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
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Filter' },
        { value: true, text: 'Completed' },
        { value: false, text: 'Uncompleted' }
      ]
    };
  },
  computed: {
    tasks: {
      get () {
        let tasks;
        if (this.$data.selected === null) {
          tasks = this.board.tasks;
        } else {
          tasks = this.board.tasks.filter(item => {
            return item.completed === this.$data.selected;
          });
        }
        return tasks.sort(compare);
      },
      set (data) {
        this.$props.onUpdateTaskList(data);
      }
    },
    isFilterEnabled: function () {
      return !!this.$props.board.tasks.length;
    },
    isCompleted: function () {
      return this.$props.board.tasks.length && !this.$props.board.tasks.some(item => !item.completed);
    }
  },
  methods: {
    onMove: function () {
      return Boolean(!this.$data.selected);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../styles/variables';
$board-color: #E5E4E2;
.board {
  min-width: 270px;
  border-radius: $border-radius;

  .board-inner {
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
    border-radius: $border-radius;
    background: $board-color;
    max-height: 100%;
    overflow-y: auto;
    box-shadow: 5px 5px 5px 0px rgba(140, 140, 140, 0.5);

    .board-header {
      position: sticky;
      top: 0;
      background: inherit;
      padding-top: 10px;
      z-index: 1;

      .board-title-container {
        position: relative;
        cursor: pointer;

        .success-badge {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .board-title {
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .board-title, .success-badge {
          vertical-align: middle;
        }
      }

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

    .empty-task {
      padding: 10px;
      background: white;
      border-radius: $border-radius;
    }
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
