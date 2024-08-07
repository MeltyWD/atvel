<template>
  <Heading :content="headingContent" />
  <!-- .heading -->

  <div class="intro">
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
          <!-- .intro__item -->
          <div class="intro__item">
            <div class="intro__text">
              Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free.
            </div>
          </div>
          <!-- .intro__item -->
        </div>
      </div>
    </div>
    <!-- .intro__main -->
    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>
    <!-- .intro__item -->
  </div>
  <!-- .intro -->

  <div class="section section--top">
    <div class="container">
      <div class="info-block">
        <div class="info-block__media">
          <img src="@img/info_block_image.jpg" class="img-cover" alt="" />
        </div>
        <div class="info-block__content" data-spoilers>
          <div class="spoiler open" data-spoiler>
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">{{ spoilerContent.title }}</div>
              <div class="spoiler__control">
                <svg
                  class="ico-svg"
                  viewBox="0 0 34 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#spoiler_arrow"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
            </div>
            <!-- .spoiler__header -->
            <div
              class="spoiler__content"
              data-spoiler-content
              style="display: block"
            >
              <div class="spoiler__wrap">
                <p>
                  {{ spoilerContent.text }}
                </p>
              </div>
            </div>
            <!-- .spoiler__content -->
          </div>
          <!-- .spoiler -->
          <div class="spoiler" data-spoiler>
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">{{ spoilerContent.title }}</div>
              <div class="spoiler__control">
                <svg
                  class="ico-svg"
                  viewBox="0 0 34 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#spoiler_arrow"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
            </div>
            <!-- .spoiler__header -->
            <div class="spoiler__content" data-spoiler-content>
              <div class="spoiler__wrap">
                <p>
                  {{ spoilerContent.text }}
                </p>
              </div>
            </div>
            <!-- .spoiler__content -->
          </div>
          <!-- .spoiler -->
          <div class="spoiler" data-spoiler>
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">{{ spoilerContent.title }}</div>
              <div class="spoiler__control">
                <svg
                  class="ico-svg"
                  viewBox="0 0 34 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#spoiler_arrow"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
            </div>
            <!-- .spoiler__header -->
            <div class="spoiler__content" data-spoiler-content>
              <div class="spoiler__wrap">
                <p>
                  {{ spoilerContent.text }}
                </p>
              </div>
            </div>
            <!-- .spoiler__content -->
          </div>
          <!-- .spoiler -->
        </div>
        <!-- .spoiler -->
      </div>
      <!-- .info-block -->
    </div>
  </div>
  <Faq :section="sectionContent" :faqContents="faqContent" partnership />
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
      <div class="pretty-heading">
        <div class="pretty-heading__tag">{{ prettyHeadingContent.tag }}</div>
        <h2 class="pretty-heading__title">
          {{ prettyHeadingContent.title }}
        </h2>
      </div>
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
          <div class="main-form__field main-form__field--xl mt-10">
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
              <div class="label-text">{{ formContent.textLabel }}</div>
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
                  <span class="checkbox__label">{{
                    formContent.checkboxLabel
                  }}</span>
                </label>
              </div>
              <div class="main-form__item">
                <button type="button" class="btn btn-red btn-md">
                  <span>{{ formContent.button }}</span>
                </button>
              </div>
            </div>
          </div>
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
</script>

<style scoped></style>
