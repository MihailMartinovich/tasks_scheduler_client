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

<style></style>
