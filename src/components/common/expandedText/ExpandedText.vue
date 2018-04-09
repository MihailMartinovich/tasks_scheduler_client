<template>
  <div class="expanded-text">
    <div class="expanded-text-inner">
      <div ref="textareaRef"
           class="expanded-text-textarea"
           v-bind:style="styleObject">
        {{text}}
      </div>
      <div class="expand-button-container"
           v-if="isExpandButtonVisible">
        <b-button size="sm"
                  variant="link"
                  @click="expand"
                  class="expand-button">
          {{toggleButtonText}}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpandedText',
  props: ['text', 'initialHeight', 'useTimeout'],
  data () {
    return {
      isExpanded: false,
      isExpandButtonVisible: true
    };
  },
  computed: {
    styleObject: function () {
      return this.$data.isExpanded
        ? {}
        : {
          maxHeight: this.$props.initialHeight + 'px'
        };
    },
    toggleButtonText: function () {
      return this.$data.isExpanded ? 'hide' : 'show';
    }
  },
  methods: {
    expand: function () {
      this.$data.isExpanded = !this.$data.isExpanded;
    },
    checkContentHeight: function () {
      if (!this.$props.useTimeout) {
        this.$data.isExpandButtonVisible = this.$refs.textareaRef.clientHeight >= this.$props.initialHeight;
      } else {
        setTimeout(() => {
          this.$data.isExpandButtonVisible = this.$refs.textareaRef.clientHeight >= this.$props.initialHeight;
        }, 0);
      }
    }
  },
  updated () {
    this.checkContentHeight();
  },
  mounted () {
    this.checkContentHeight();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../styles/variables';

.expanded-text {
  .expanded-text-inner {
    overflow: hidden;

    .expanded-text-textarea {
      border: none;
      background: transparent;
    }

    .expand-button-container {
      text-align: center;
      height: 40px;

      .expand-button {
        height: 100%;
        width: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 1));
        cursor: pointer;
        font-weight: 700;
      }
    }
  }
}
</style>
