<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>
<script setup lang="ts">
import AppHeader from "../src/components/AppHeader.vue";
import AppFooter from "../src/components/AppFooter.vue";
</script>
