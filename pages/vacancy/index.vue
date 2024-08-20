<template>
  <!-- <div class="heading">
    <div class="container">
      <div class="heading__wrap heading__wrap--center">
        <div class="heading__title">Join our team</div>
        <div class="heading__text">
          Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.
        </div>
      </div>
    </div>
  </div> -->
  <Heading :content="content.headingContent" />
  <!-- .heading -->
  <Intro :content="content.introContent" :list="content.introContent.list" />
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
      </div>
    </div>

    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>

  </div> -->

  <div class="section section--top">
    <div class="container">
      <PrettyHeading
        :content="content.prettyHeadingContent"
        :vacancy="content.prettyHeadingContent.vacancy"
      />

      <!-- .pretty-heading -->

      <ul class="steps">
        <li class="steps__item" v-for="item in content.stepsListItems">
          <div class="steps__media">
            <div class="steps__icon">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#phone"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </div>
          </div>
          <div class="steps__title">{{ item.title }}</div>
          <div class="steps__text">{{ item.text }}</div>
          <div class="steps__num">{{ item.num }}</div>
        </li>
        <!--      
        <li class="steps__item">
          <div class="steps__media">
            <div class="steps__icon">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#phone"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </div>
          </div>
          <div class="steps__title">Growth</div>
          <div class="steps__text">Chat with our team in real-time</div>
          <div class="steps__num">2</div>
        </li>
    
        <li class="steps__item">
          <div class="steps__media">
            <div class="steps__icon">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#phone"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </div>
          </div>
          <div class="steps__title">Expansion</div>
          <div class="steps__text">
            Partner with Atvel and unlock new business opportunities in the home
            appliance industry.
          </div>
          <div class="steps__num">3</div>
        </li>
      
        <li class="steps__item">
          <div class="steps__media">
            <div class="steps__icon">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#phone"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </div>
          </div>
          <div class="steps__title">Innovation</div>
          <div class="steps__text">We're here to help!</div>
          <div class="steps__num">4</div>
        </li>
   -->
      </ul>
      <!-- .steps -->
    </div>
  </div>
  <Faq
    :content="content.sectionContent"
    :list="content.faqContent"
    :vacancy="content.vacancy"
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

  <div class="section pb-0">
    <div class="container">
      <div class="vacancy">
        <div class="vacancy__content">
          <div class="vacancy__header">{{ content.vacancyContent.header }}</div>
          <div class="vacancy__button">
            <a href="#" class="btn btn-red">
              <span>{{ content.vacancyContent.button }}</span>
            </a>
          </div>
        </div>
        <div class="vacancy__media">
          <img src="@img/vacancy_image.png" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="section section--top">
    <div class="container">
      <PrettyHeading :content="content.prettyHeadingVacancyContent" />
      <!-- <div class="pretty-heading">
        <div class="pretty-heading__tag">Apply</div>
        <h2 class="pretty-heading__title">Contact HR</h2>
      </div> -->
      <!-- .pretty-heading -->
      <form>
        <div class="main-form">
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="name" placeholder="First name" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="name" placeholder="Last name" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="email" placeholder="Email" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="sn" placeholder="Phone" />
            </label>
          </div>
          <div class="main-form__field main-form__field--xl">
            <label class="field">
              <textarea
                name="message"
                placeholder="Message"
                data-dynamic
              ></textarea>
            </label>
          </div>
          <Form
            :content="content.formContent"
            :file="content.formContent.file"
          />
          <!-- <div class="main-form__field main-form__field--xl mt-10">
            <label class="file-field" data-file>
              <input
                type="file"
                name="file"
                class="file-field__input"
                data-file-input
              />
              <i class="file-field__media">
                <i class="file-field__close" data-file-reset></i>
                <i class="file-field__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#file"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </i>
              </i>
              <span
                class="file-field__name"
                data-file-placeholder="Прикрепить файл"
                >Прикрепить резюме</span
              >
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
                  <span class="checkbox__label">I agree to the Terms</span>
                </label>
              </div>
              <div class="main-form__item">
                <button type="button" class="btn btn-red btn-md">
                  <span>Send</span>
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
    list: false,
  },
  prettyHeadingContent: {
    tag: "",
    title: "",
    vacancy: true,
  },
  prettyHeadingVacancyContent: {
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
  vacancy: true,
  stepsListItems: [
    {
      title: "",
      text: "",
      num: "",
    },
  ],
  vacancyContent: {
    header: "",
    button: "",
  },
  formContent: {
    textLabel: "",
    checkboxLabel: "",
    textButton: "",
    file: true,
  },
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/vacancy${query}`);

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
