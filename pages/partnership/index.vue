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
  <Spoiler :listItems="content.spoilerListItems" />

  <Faq
    :content="content.sectionContent"
    :list="content.faqContent"
    :partnership="content.partnership"
  />
  <!-- <div class="section section--top-custom-sm">
    <div class="container">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">FAQ</h2>
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

  <div class="section section--white section--top">
    <div class="container">
      <PrettyHeading :content="content.prettyHeadingContent" />

      <!-- .pretty-heading -->
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
          <div class="main-form__field main-form__field--xl">
            <label class="field">
              <input type="text" name="city" placeholder="City" />
            </label>
          </div>
          <Form
            :content="content.formContent"
            :text="content.formContent.text"
          />
          <!-- <div class="main-form__field main-form__field--xl mt-10">
            <div class="d-flex align-center column-gap-10">
              <label class="switcher">
                <input type="checkbox" name="switcher" checked />
                <span
                  class="switcher__label"
                  data-switcher-checked="Да"
                  data-switcher-base="Нет"
                >
                  <span></span>
                </span>
              </label>
              <div class="label-text">{{ content.formContent.textLabel }}</div>
            </div>
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
                  <span class="checkbox__label">
                    {{ content.formContent.checkboxLabel }}
                  </span>
                </label>
              </div>
              <div class="main-form__item">
                <button type="button" class="btn btn-red btn-md">
                  <span>{{ content.formContent.textButton }}</span>
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
const headingContent = {
  title: "Partner\nwith us",
  text: `Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.`,
};
const spoilerContent = {
  title: "Programmable Settings",
  text: `Customize your kitchen robot's functions to suit your needs
                  with programmable settings. Set timers, create schedules, and
                  automate tasks for a more convenient cooking experience.`,
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
const prettyHeadingContent = {
  tag: "Tagline",
  title: "Узнайте, как открыть бизнес с Atvel в Вашем городе",
};
const formContent = {
  textLabel: "Текст текст текст",
  checkboxLabel: "I agree to the Terms",
  button: "Send",
};
import Spoiler from "./Spoiler.vue";
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
  spoilerListItems: [
    {
      title: "",
      text: "",
    },
  ],
  open: true,
  prettyHeadingContent: {
    tag: "",
    title: "",
  },

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
  partnership: true,

  formContent: {
    textLabel: "",
    checkboxLabel: "",
    textButton: "",
    text: true,
  },
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/partnership${query}`);

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
