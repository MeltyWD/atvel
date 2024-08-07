<template>
  <Heading :content="headingContent" />

  <Intro :content="introContent" />

  <div class="section section--top-md">
    <div class="container">
      <div class="motivation">
        <div class="motivation__header">
          {{ motivationContent.title }}
        </div>
        <div class="motivation__text">
          {{ motivationContent.text }}
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
  <ItemCategory :content="itemCategoryContent" white />
  <ItemCategory :content="itemCategoryContentReverse" reverse />

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
          <li class="post__list-item" v-for="item in postListItems">
            {{ item.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const headingContent = {
  title: "Transforming Home Appliances",
  text: `Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.`,
};
const introContent = {
  title: "Experience a Friendly Interface for Effortless",
  lead: `Atvel's website offers a seamless shopping experience with easy
            navigation, ensuring that you can find and purchase your desired
            home goods hassle-free. Our user-friendly interface is designed to
            make your shopping journey enjoyable and efficient.`,
};
const motivationContent = {
  title: "Discover Your Perfect Style with Customizable Atvel Home Goods",
  text: `Travel offers a wide range of home goods that can be personalized to
          match your unique taste. Choose from personalized designs, a variety
          of color options, and flexible sizing choices to create a truly
          customized and stylish home.`,
};
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
</script>

<style scoped>
.post__content {
  list-style: none;
  padding-left: 0;
}
</style>
