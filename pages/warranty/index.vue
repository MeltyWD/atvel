<template>
  <Heading :content="content.headingContent" />
  <!-- .heading -->
  <Intro
    :content="content.introContent"
    :list="content.introContent.list"
    :listItems="content.introListItems"
  />
  <!-- <div class="intro">
    <div class="intro__main">
      <div class="container">
        <div class="intro__header">
          <div class="intro__title">
            Experience a Friendly Interface for Effortless
          </div>
          <div class="intro__lead">
            Atvel's website offers a seamless shopping experience with easy
            navigation, ensuring that you can find and purchase your desired
            home goods hassle-free. Our user-friendly interface is designed to
            make your shopping journey enjoyable and efficient.
          </div>
        </div>
        <div class="intro__content intro__content--two">
          <div class="intro__item">
            <div class="intro__text">
              Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free.
            </div>
          </div>

          <div class="intro__item">
            <div class="intro__text">
              Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free.
            </div>
          </div>
    
        </div>
      </div>
    </div>

    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>

  </div> -->
  <!-- .intro -->
  <!-- 
  <Faq :section="sectionContent" :faqContents="faqContent" warranty /> -->
  <!-- <div class="section section--top">
    <div class="container">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">Warranty</h2>
      </div>
      <div class="section__body">
        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>

        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>

        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>

        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div> -->
  <ItemCategory
    :content="content.itemCategoryContentReverse"
    :reverse="content.itemCategoryContentReverse.reverse"
    :white="content.itemCategoryContentReverse.white"
    :list="content.categoryListItems"
  />
  <!-- <div class="section section--white section--md">
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
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">Discover a Wide Range of High-Quality Products</a>
            </div>
            <div class="item-category__text">
              <p>
                Atvel's website offers a seamless shopping experience with easy
                navigation, ensuring that you can find and purchase your desired
                home goods hassle-free. Our user-friendly interface is designed
                to make your shopping journey enjoyable and efficient.
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li>
              Elevate your home with Atvel's exquisite range of high-quality,
              beautifully crafted home goods.
            </li>
            <li>
              Elevate your home with Atvel's exquisite range of high-quality,
              beautifully crafted home goods.
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div> -->

  <div class="section section--top-md">
    <div class="container">
      <div class="section__tag">{{ content.sectionContent.tag }}</div>
      <div class="section__header section__header--sm">
        <h2 class="section__title">{{ content.sectionContent.title }}</h2>
      </div>
      <div class="section-intro">
        <div class="section-intro__text">
          {{ content.sectionContent.text }}
        </div>
      </div>

      <form>
        <div class="main-form">
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="name" placeholder="Full name" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="email" placeholder="Email" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="model" placeholder="Название модели" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="sn" placeholder="Серийный номер" />
            </label>
          </div>
          <div class="main-form__field main-form__field--xl">
            <label class="field">
              <input type="text" name="market" placeholder="Где был куплен" />
            </label>
          </div>
          <Form
            :content="content.formContent"
            :empty="content.formContent.empty"
          />
          <!-- <div class="main-form__field main-form__field--xl">
            <label class="field">
              <textarea
                name="message"
                placeholder="Message"
                data-dynamic
              ></textarea>
            </label>
          </div>
          <div class="main-form__field main-form__field--xl mt-10">
            <div class="main-form__group">
              <div class="main-form__item">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    name="check"
                    class="checkbox__input"
                    checked
                  />
                  <span class="checkbox__label">{{ checkboxLabel }}</span>
                </label>
              </div>
              <div class="main-form__item">
                <button type="button" class="btn btn-red btn-md">
                  <span>{{ submitBtnText }}</span>
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const checkboxLabel = "I agree to the Terms";
const submitBtnText = "Send";
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
    text: "",
    list: true,
  },
  introListItems: [
    {
      text: "",
    },
  ],
  itemCategoryContentReverse: {
    title: "",
    text: ``,
    white: true,
    reverse: true,
  },
  categoryListItems: [
    {
      text: "",
    },
  ],
  sectionContent: {
    tag: "",
    title: "",
    text: "",
  },

  formContent: {
    checkboxLabel: "",
    textButton: "",
    empty: true,
  },
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/warranty${query}`);

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
