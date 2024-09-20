<template>
  <div :class="`pretty-heading ${vacancy ? ' pretty-heading--md' : ''} `">
    <div class="pretty-heading__tag">
      {{ content.tag }}
    </div>
    <h2 class="pretty-heading__title">
      {{ content.title }}
    </h2>
    <div v-if="full" class="pretty-heading__text">
      {{ content.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    tag: string;
    title: string;
    text?: string;
  };
  vacancy?: boolean;
  full?: boolean;
}>();
</script>

<style scoped></style>
