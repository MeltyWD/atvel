<template>
  <div
    :class="`section
    ${partnership ? ' section--top-custom-sm' : ''} 
    ${warranty ? ' section--top' : ''}
    `"
  >
    <div class="container">
      <div class="section__tag">
        {{ content.tag }}
      </div>
      <div class="section__header">
        <h2 class="section__title">
          {{ content.title }}
        </h2>
      </div>
      <div class="section__body">
        <div v-for="item of list" class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              {{ item.title }}
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    tag: string;
    title: string;
  };
  list: {
    title: string;
    text: string;
  }[];
  partnership?: boolean;
  warranty?: boolean;
}>();
</script>

<style scoped></style>
