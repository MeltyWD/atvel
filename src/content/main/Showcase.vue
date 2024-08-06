<template>
  <div class="section">
    <div class="showcase">
      <swiper
        :modules="[Autoplay]"
        :observer="true"
        :loop="true"
        :initialSlide="3"
        :observeParents="true"
        slidesPerView="auto"
        :spaceBetween="10"
        :speed="10000"
        :autoplay="{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        }"
        :on="{}"
      >
        <swiper-slide v-for="item of items">
          <ItemShowcase :webp="item.webp" :img="item.img" :title="item.title" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="showcase">
      <div class="swiper" data-showcase-two>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__07.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__07.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__06.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__06.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__05.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__05.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__04.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__04.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__03.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__03.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__02.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__02.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="showcase-item">
              <picture>
                <source
                  srcset="@img/content/showcase_image__01.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/showcase_image__01.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
              <span class="showcase-item__title">Роботы пылесосы</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import ItemShowcase from "./Showcase/items.vue";

const items = [
  {
    webp: "@img/content/showcase_image__01.webp",
    img: "@img/content/showcase_image__01.jpg",
    title: "Роботы пылесосы",
  },
  {
    webp: "@img/content/showcase_image__02.webp",
    img: "@img/content/showcase_image__02.jpg",
    title: "Роботы пылесосы",
  },
  {
    webp: "@img/content/showcase_image__03.webp",
    img: "@img/content/showcase_image__03.jpg",
    title: "Роботы пылесосы",
  },
  {
    webp: "@img/content/showcase_image__04.webp",
    img: "@img/content/showcase_image__04.jpg",
    title: "Роботы пылесосы",
  },
  {
    webp: "@img/content/showcase_image__05.webp",
    img: "@img/content/showcase_image__05.jpg",
    title: "Роботы пылесосы",
  },
  {
    webp: "@img/content/showcase_image__06.webp",
    img: "@img/content/showcase_image__06.jpg",
    title: "Роботы пылесосы",
  },
  {
    webp: "@img/content/showcase_image__07.webp",
    img: "@img/content/showcase_image__07.jpg",
    title: "Роботы пылесосы",
  },
];
</script>

<style scoped></style>
