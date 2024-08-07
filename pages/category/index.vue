<template>
  <Heading :content="headingContent" />
  <!-- .heading -->

  <div class="category-header">
    <div class="category-header__body">
      <div class="container">
        <div class="category-header__wrap">
          <div class="category-header__main">
            <div class="category-header__title">
              {{ categoryHeaderContent.title }}
            </div>
            <div class="category-header__lead">
              {{ categoryHeaderContent.lead }}
            </div>
          </div>
          <!-- .category-header__main -->
          <div class="category-header__content">
            <div class="category-header__text">
              {{ categoryHeaderContent.text }}
            </div>
            <div class="category-header__text">
              {{ categoryHeaderContent.text }}
            </div>
          </div>
          <!-- .category-header__content -->
        </div>
      </div>
    </div>
    <!-- .category-header__body -->
    <div class="category-header__media category-header__media--sm">
      <img src="@img/category_heading_sm.jpg" class="img-cover" alt="" />
    </div>
    <!-- .category-header__media -->
    <div class="category-header__media category-header__media--md">
      <img src="@img/category_heading_md.jpg" class="img-cover" alt="" />
    </div>
    <!-- .category-header__media -->
  </div>
  <!-- .category-header -->

  <div class="section section--top">
    <div class="container">
      <div class="category-group">
        <a href="#" class="category-item-xl">
          <img
            src="@img/content/item_section_image_xl.jpg"
            class="img-cover"
            alt=""
          />
        </a>
        <!-- <div class="item-category item-category--sm">
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
            <ul class="item-category__list">
              <li v-for="item in itemCategoryListItems">
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
        </div> -->
        <!-- .item-category -->
        <!-- <div class="item-category item-category--reverse">
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
            <ul class="item-category__list">
              <li v-for="item in itemCategoryListItems">
                {{ item.content }}
              </li>
            </ul>
            <div class="item-category__button">
              <a href="#" class="btn btn-red">
                <span>{{ itemCategoryContent.button }}</span>
              </a>
            </div>
          </div>
        </div> -->
        <ItemCategory :content="itemCategoryContentReverse" reverse />
        <ItemCategory :content="itemCategoryContent" />

        <!-- .item-category -->
        <!-- <div class="item-category">
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
            <ul class="item-category__list">
              <li v-for="item in itemCategoryListItems">
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
        </div> -->
        <!-- .item-category -->
      </div>
    </div>
  </div>
  <Faq :section="sectionContent" :faqContents="faqContent" />
  <!-- .faq -->
</template>

<script setup lang="ts">
const headingContent = {
  title: "Experience a User-Friendly Interface \nfor Effortless Shopping",
  text: `Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.`,
};
const categoryHeaderContent = {
  title: "Experience a User-Friendly Interface for Effortless Shopping",
  lead: `Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.`,
  text: `Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free.`,
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
const sectionContent = {
  tag: "Luxurious",
  title: "FAQ",
};
const faqContent = [
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
];
</script>

<style scoped></style>
