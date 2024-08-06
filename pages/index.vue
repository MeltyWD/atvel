<template>
  <Main :content="content" />
</template>

<script setup lang="ts">
import { useApi } from "../src/composables/useApi";
import { useLocale } from "../src/composables/useLocale";

const locale = useLocale();

const content = ref(null);

const query = `?populate[FirstSection][populate][0]=PrimaryItem`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/main-page${query}`);

  if (data.value) {
    content.value = data.value.data.attributes;

    console.log(data.value.data.attributes);
  }

  if (error.value) {
    console.log(error);
  }
};

await getContent();

watch(locale, async () => {
  await getContent();
});
</script>

<style scoped></style>
