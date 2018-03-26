<template>
  <div id="app">
    <TheHeader />

    <main class="main-content">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../theHeader/TheHeader';
import TheFooter from '../theFooter/TheFooter';

export default {
  name: 'LayoutBase',
  components: { TheHeader, TheFooter }
};
</script>

<style>
  #theHeader {
    flex: none;
  }

  .main-content {
    flex: 1;
    width: 100%;
    position: relative;
    background-color: rgb(233, 238, 240);
  }

  #theFooter {
    flex: none;
  }

</style>
