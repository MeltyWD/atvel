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

  <!-- <div class="section section--white section--md">
    <div class="container">
      <div class="item-category">
        <div class="item-category__media">
          <img
            src="@img/content/item_section_image.jpg"
            class="img-cover"
            alt=""
          />
        </div>
        <div class="item-category__content">
          <div class="item-category__tag">
            {{ itemCategoryContent.tag }}
          </div>
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">
                {{ itemCategoryContent.title }}
              </a>
            </div>
            <div class="item-category__text">
              <p>
                {{ itemCategoryContent.text }}
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li v-for="item in itemCategoryContent.categoryListItems">
              {{ item.content }}
            </li>
          </ul>
          <div class="item-category__button">
            <a href="#" class="btn btn-red">
              <span>
                {{ itemCategoryContent.button }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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

  <!-- <div class="section section--md">
    <div class="container">
      <div class="item-category item-category--reverse">
        <div class="item-category__media">
          <img
            src="@img/content/item_section_image.jpg"
            class="img-cover"
            alt=""
          />
        </div>
        <div class="item-category__content">
          <div class="item-category__tag">
            {{ itemCategoryContent.tag }}
          </div>
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">
                {{ itemCategoryContent.title }}
              </a>
            </div>
            <div class="item-category__text">
              <p>
                {{ itemCategoryContent.text }}
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li v-for="item in itemCategoryContent.categoryListItems">
              {{ item.content }}
            </li>
          </ul>
          <div class="item-category__button">
            <a href="#" class="btn btn-red">
              <span>
                {{ itemCategoryContent.button }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->

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
// const headingContent = {
//   title: "Transforming Home Appliances",
//   text: `Atvel's website offers a seamless shopping experience with easy
//           navigation, ensuring that you can find and purchase your desired home
//           goods hassle-free. Our user-friendly interface is designed to make
//           your shopping journey enjoyable and efficient.`,
// };
// const introContent = {
//   title: "Experience a Friendly Interface for Effortless",
//   lead: `Atvel's website offers a seamless shopping experience with easy
//             navigation, ensuring that you can find and purchase your desired
//             home goods hassle-free. Our user-friendly interface is designed to
//             make your shopping journey enjoyable and efficient.`,
// };
// const motivationContent = {
//   title: "Discover Your Perfect Style with Customizable Atvel Home Goods",
//   text: `Travel offers a wide range of home goods that can be personalized to
//           match your unique taste. Choose from personalized designs, a variety
//           of color options, and flexible sizing choices to create a truly
//           customized and stylish home.`,
// };
const itemCategoryContent = {
  tag: "Tagline",
  title: "Discover a Wide Range of High-Quality Products",
  text: `Atvel's website offers a seamless shopping experience with easy
                navigation, ensuring that you can find and purchase your desired
                home goods hassle-free. Our user-friendly interface is designed
                to make your shopping journey enjoyable and efficient.`,
  button: "Learn more",
  categoryListItems: [
    {
      content: `Elevate your home with Atvel's exquisite range of high-quality,
              beautifully crafted home goods.`,
    },
    {
      content: `Elevate your home with Atvel's exquisite range of high-quality,
              beautifully crafted home goods.`,
    },
  ],
};
const itemCategoryContentReverse = {
  tag: "Tagline",
  title: "Discover a Wide Range of High-Quality Products",
  text: `Atvel's website offers a seamless shopping experience with easy
                navigation, ensuring that you can find and purchase your desired
                home goods hassle-free. Our user-friendly interface is designed
                to make your shopping journey enjoyable and efficient.`,
  button: "Learn more",
  categoryListItems: [
    {
      content: `Elevate your home with Atvel's exquisite range of high-quality,
              beautifully crafted home goods.`,
    },
    {
      content: `Elevate your home with Atvel's exquisite range of high-quality,
              beautifully crafted home goods.`,
    },
  ],
};
const postListItems = [
  {
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.`,
  },
  {
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.`,
  },
];
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

<style scoped>
.post__content {
  list-style: none;
  padding-left: 0;
}
</style>
