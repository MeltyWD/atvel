<template>
  <Main />
</template>

<script setup lang="ts">
const token =
  "Bearer 14fa9b3c3a17a2f8f53028aca71af1e3fedda9af58ac437b985a672f7ea5cdf47221a15393f50e71b39d80cebc4dbb49549776f4cf773f279b9dce4c3703ffc3381a9d54777a0b3294f94763c20ceda5c320e331401df28acded4fe8b0bbc11db75100f7ddd1808b7578fbdcf11f193cf513e3a3f48237c4be3f3550b1fa7bc9";

onMounted(async () => {
  const { data } = await fetch("http://localhost:1337/api/products", {
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());

  console.log(data.map((x: any) => x.attributes));
});
</script>

<style scoped></style>
