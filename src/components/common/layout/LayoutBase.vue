<template>
  <div id="app"
       class="grid">
    <TheHeader />

    <main class="main">
      <div class="main-inner">
        <slot />
      </div>
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

<style lang="scss">
@import '../../../styles/variables';
.grid {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: 50px auto 50px;
  grid-column-gap: 10px;
  overflow: hidden;

  #theHeader { }

  .main {
    width: 100%;
    position: relative;
  }

  .main-inner {
    width: 100%;
    height:100%;
    background-color: $main-color;
    padding: 10px;
    overflow-y: hidden;
  }

  #theFooter { }
}
</style>
