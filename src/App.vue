<template>
  <BaseLayout>
    <router-view/>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/common/layout/LayoutBase';

export default {
  name: 'App',
  components: { BaseLayout }
};
</script>

<style>
  html * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
