<template>
  <div class="hello">
    <Login :on-submit="onSubmit"/>
  </div>
</template>

<script>
import Login from './Login.vue';
import ActionTypes from '@/constants/actionTypesConstants';

export default {
  name: 'LoginContainer',
  components: { Login },
  methods: {
    onSubmit (data) {
      this.$store.dispatch(ActionTypes.LOG_IN_USER, data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
