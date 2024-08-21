<template>
  <Heading :content="content.headingContent" />
  <Intro :content="content.introContent" />
  <div class="section section--top-md">
    <div class="container">
      <div class="motivation">
        <div class="motivation__header">
          {{ content.motivationContent.title }}
        </div>
        <div class="motivation__text">
          {{ content.motivationContent.text }}
        </div>
      </div>
    </div>
  </div>

  <ItemCategory
    :content="content.itemCategoryContent"
    :reverse="content.itemCategoryContent.reverse"
    :white="content.itemCategoryContent.white"
    :list="content.categoryListItems"
    :full="content.itemCategoryContent.full"
  />
  <ItemCategory
    :content="content.itemCategoryContentReverse"
    :reverse="content.itemCategoryContentReverse.reverse"
    :white="content.itemCategoryContentReverse.white"
    :list="content.categoryListItems"
    :full="content.itemCategoryContentReverse.full"
  />

  <div class="section section--top-md">
    <div class="container">
      <div class="post">
        <ul class="post__content">
          <li class="post__list-item" v-for="item in content.postListItems">
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "../../src/composables/useApi";
import { useLocale } from "../../src/composables/useLocale";

const locale = useLocale();

const content = ref({
  headingContent: {
    title: "",
    text: "",
  },
  introContent: {
    title: "",
    lead: "",
  },
  motivationContent: {
    title: "",
    text: "",
  },
  itemCategoryContent: {
    tag: "",
    title: "",
    text: ``,
    button: "",
    white: true,
    reverse: false,
    full: true,
  },
  itemCategoryContentReverse: {
    tag: "",
    title: "",
    text: ``,
    button: "",
    white: false,
    reverse: true,
    full: true,
  },
  categoryListItems: [
    {
      text: ``,
    },
  ],
  postListItems: [
    {
      text: ``,
    },
  ],
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/about${query}`);

  if (data.value) {
    content.value = data.value.data.attributes;
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

<style scoped>
.post__content {
  list-style: none;
  padding-left: 0;
}
</style>
