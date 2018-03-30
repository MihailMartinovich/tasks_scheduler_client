<template>
  <header id="theHeader">
    <b-dropdown id="userMenuDropdown" :text="username" class="m-md-2">
      <b-dropdown-item>My Profile</b-dropdown-item>
    </b-dropdown>
    <b-button @click="logOutUser">Log Out</b-button>
  </header>
</template>

<script>
import ActionTypes from '@/constants/actionTypesConstants';

export default {
  name: 'TheHeader',
  computed: {
    username () {
      return this.$store.state.auth.username;
    }
  },
  methods: {
    logOutUser () {
      this.$store.dispatch(ActionTypes.LOG_OUT_USER);
    }
  }
};
</script>

<style>
  #theHeader {
    height: 40px;
    background-color: rgba(50, 50, 50, 1);
    color: white;
    padding: 5px 20px;
  }
</style>
