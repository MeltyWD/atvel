<template>
  <div :class="`section section--md${white ? ' section--white' : ''}`">
    <div class="container">
      <div :class="`item-category${reverse ? ' item-category--reverse' : ''}`">
        <div class="item-category__media">
          <Image :image="image" :altName="altName" :className="className" />
          <!-- <img
            src="@img/content/item_section_image.jpg"
            class="img-cover"
            alt=""
          /> -->
        </div>
        <div v-if="full" class="item-category__content">
          <div class="item-category__tag">
            {{ content.tag }}
          </div>
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">
                {{ content.title }}
              </a>
            </div>
            <div class="item-category__text">
              <p>
                {{ content.text }}
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li v-for="item in list">
              {{ item.text }}
            </li>
          </ul>
          <div class="item-category__button">
            <a href="#" class="btn btn-red">
              <span>
                {{ content.button }}
              </span>
            </a>
          </div>
        </div>
        <div v-else class="item-category__content">
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">
                {{ content.title }}
              </a>
            </div>
            <div class="item-category__text">
              <p>
                {{ content.text }}
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li v-for="item in list">
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
      <!-- .item-category -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    tag?: string;
    title: string;
    text: string;
    button?: string;
  };
  list: {
    text: string;
  }[];

  reverse?: boolean;
  white?: boolean;
  full?: boolean;
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
          source: {
            url: string;
          };
        };
      };
    };
  };
  altName: string;
  className: string;
}>();
</script>

<style scoped></style>
