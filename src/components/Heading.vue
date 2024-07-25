<template>
  <div class="heading">
    <div class="container">
      <div class="heading__wrap heading__wrap--center">
        <div class="heading__title">{{ content.title }}</div>
        <div class="heading__text">
          {{ content.text }}
        </div>
      </div>
    </div>
  </div>
  <!-- .heading -->
</template>

<script setup lang="ts">
defineProps<{
  content: {
    title: string;
    text: string;
  };
}>();
</script>

<style scoped></style>
