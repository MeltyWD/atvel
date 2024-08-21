<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import "@style/main.css";
import "@style/main.min.css";
import "@style/ckeditor.scss";
import { Locale, useLocale } from "./src/composables/useLocale";

const locale = useLocale();

onMounted(async () => {
  if (import.meta.client) {
    await import("./static/js/app.js");
    await import("./static/js/components/sliders.js");

    const userLocale = localStorage.getItem("userLocale") as Locale | null;

    if (userLocale) {
      locale.value = userLocale;
    }
  }
});
</script>
