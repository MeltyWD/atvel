<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import "@style/main.css";
import "@style/main.min.css";

onMounted(async () => {
  if (import.meta.client) {
    await import("./static/js/app.js");
    await import("./static/js/components/sliders.js");
  }
});
</script>
