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
import {
  useCartState,
  type UserCartState,
} from "~/src/composables/useCartState";

const cartState = useCartState();

const locale = useLocale();

onMounted(async () => {
  if (import.meta.client) {
    await import("./static/js/app.js");
    await import("./static/js/components/sliders.js");

    const userLocale = localStorage.getItem("userLocale") as Locale | null;

    const userCartJson = localStorage.getItem("userCart") as string | null;

    if (userLocale) {
      locale.value = userLocale;
    }

    if (userCartJson) {
      const userCart = JSON.parse(userCartJson) as UserCartState[];

      cartState.value = userCart;
    }
  }
});
</script>
