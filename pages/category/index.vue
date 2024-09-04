<template>
  <Heading :content="content.headingContent" />
  <!-- .heading -->

  <div class="category-header">
    <div class="category-header__body">
      <div class="container">
        <div class="category-header__wrap">
          <div class="category-header__main">
            <div class="category-header__title">
              {{ content.categoryHeaderContent.title }}
            </div>
            <div class="category-header__lead">
              {{ content.categoryHeaderContent.lead }}
            </div>
          </div>
          <!-- .category-header__main -->
          <div class="category-header__content">
            <div class="category-header__text">
              {{ content.categoryHeaderContent.text }}
            </div>
            <div class="category-header__text">
              {{ content.categoryHeaderContent.text }}
            </div>
          </div>
          <!-- .category-header__content -->
        </div>
      </div>
    </div>
    <!-- .category-header__body -->
    <div class="category-header__media category-header__media--sm">
      <Image
        :image="content.categoryHeaderVerticalImage"
        :altName="content.categoryHeaderImageAlt"
        :className="content.categoryHeaderImageClass"
      />
      <img src="@img/category_heading_sm.jpg" class="img-cover" alt="" />
    </div>
    <!-- .category-header__media -->
    <div class="category-header__media category-header__media--md">
      <Image
        :image="content.categoryHeaderHorizontalImage"
        :altName="content.categoryHeaderImageAlt"
        :className="content.categoryHeaderImageClass"
      />
      <img src="@img/category_heading_md.jpg" class="img-cover" alt="" />
    </div>
    <!-- .category-header__media -->
  </div>
  <!-- .category-header -->

  <div class="section section--top">
    <div class="container">
      <div class="category-group">
        <a href="#" class="category-item-xl">
          <Image
            :image="content.itemCategoryPreviewImage"
            :altName="content.itemCategoryPreviewAlt"
            :className="content.itemCategoryPreviewClass"
          />
          <!-- <img
            src="@img/content/item_section_image_xl.jpg"
            class="img-cover"
            alt=""
          /> -->
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
        <ItemCategory
          :content="content.itemCategoryContentReverse"
          :reverse="content.itemCategoryContentReverse.reverse"
          :white="content.itemCategoryContentReverse.white"
          :list="content.categoryListItemsReverse"
          :full="content.itemCategoryContentReverse.full"
          :image="content.itemCategoryReverseImage"
          :altName="content.itemCategoryReverseAlt"
          :className="content.itemCategoryReverseClass"
        />
        <ItemCategory
          :content="content.itemsCategoryContent"
          :reverse="content.itemsCategoryContent.reverse"
          :white="content.itemsCategoryContent.white"
          :list="content.categoryListItemsReverse"
          :full="content.itemCategoryContentReverse.full"
          :image="content.itemCategoryImage"
          :altName="content.itemCategoryAlt"
          :className="content.itemCategoryClass"
        />

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
  <Faq
    :content="content.sectionContent"
    :list="content.faqContent"
    :partnership="content.partnership"
    :warranty="content.warranty"
  />
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
import { useApi } from "../../src/composables/useApi";
import { useLocale } from "../../src/composables/useLocale";

const locale = useLocale();

const content = ref({
  headingContent: {
    title: "",
    text: "",
  },
  categoryHeaderContent: {
    title: "",
    lead: ``,
    text: ``,
  },
  itemsCategoryContent: {
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
    white: true,
    reverse: true,
    full: true,
  },
  categoryListItemsReverse: [
    {
      text: ``,
    },
  ],
  sectionContent: {
    tag: "",
    title: "",
  },
  faqContent: [
    {
      title: "",
      text: ``,
    },
  ],
  partnership: false,
  warranty: false,
  itemCategoryPreviewImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  itemCategoryImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  itemCategoryReverseImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  categoryHeaderHorizontalImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  categoryHeaderVerticalImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  itemCategoryPreviewAlt: "",
  itemCategoryPreviewClass: "",
  introImageAlt: "",
  introImageClass: "",
  itemCategoryAlt: "",
  itemCategoryClass: "",
  itemCategoryReverseAlt: "",
  itemCategoryReverseClass: "",
  categoryHeaderImageAlt: "",
  categoryHeaderImageClass: "",
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/category${query}`);

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

<style scoped></style>
