<template>
  <FirstSection :content="content.FirstSection" />
  <Showcase />
  <TopChapter />
  <MainSwiper />
  <Luxurious />
  <Discovery />
</template>

<script setup lang="ts">
const props = defineProps<{
  content: any;
}>();
</script>

<style scoped></style>
