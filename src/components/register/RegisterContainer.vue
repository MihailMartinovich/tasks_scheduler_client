<template>
  <div class="register-container">
    <Register :on-submit="onSubmit"/>
  </div>
</template>

<script>
import Register from './Register.vue';
import ActionTypes from '@/constants/actionTypesConstants';

export default {
  name: 'RegisterContainer',
  components: { Register },
  methods: {
    onSubmit (data) {
      this.$store.dispatch(ActionTypes.REGISTER_USER, data);
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
