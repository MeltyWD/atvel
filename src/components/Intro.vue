<template>
  <div class="intro">
    <div class="intro__main">
      <div class="container">
        <div class="intro__header">
          <div class="intro__title">
            {{ content.title }}
          </div>
          <div class="intro__lead">
            {{ content.lead }}
          </div>
        </div>
        <!-- <div class="intro__content intro__content--two">
          <div class="intro__item">
            <div class="intro__text">
              {{ content.text }}
            </div>
          </div>
          <div class="intro__item">
            <div class="intro__text">
              {{ content.text }}
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- .intro__main -->
    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>
    <!-- .intro__item -->
  </div>
  <!-- .intro -->
</template>

<script setup lang="ts">
defineProps<{
  content: {
    title: string;
    lead: string;
    text?: string;
  };
}>();
</script>

<style scoped></style>
