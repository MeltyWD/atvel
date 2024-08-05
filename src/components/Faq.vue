<template>
  <div class="section">
    <div class="container">
      <div class="section__tag">
        {{ section.tag }}
      </div>
      <div class="section__header">
        <h2 class="section__title">
          {{ section.title }}
        </h2>
      </div>
      <div class="section__body">
        <div v-for="faq of faqContents" class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              {{ faq.title }}
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                {{ faq.text }}
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
  section: {
    tag: string;
    title: string;
  };
  faqContents: {
    title: string;
    text: string;
  }[];
}>();
</script>

<style scoped></style>
