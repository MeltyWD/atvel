<template>
  <Heading :content="content.headingContent" />
  <!-- .heading -->

  <Intro
    :content="content.introContent"
    :image="content.introImage"
    :altName="content.introImageAlt"
    :className="content.introImageClass"
  />

  <div class="section section--top-md section--bottom-sm">
    <div class="container">
      <div class="section__tag">{{ content.sectionContent.tag }}</div>
      <div class="section__header section__header--sm">
        <h2 class="section__title">{{ content.sectionContent.title }}</h2>
      </div>
      <div class="section-intro">
        <div class="section-intro__text">
          {{ content.sectionContent.text }}
        </div>
        <div class="section-intro__content">
          <div class="contacts">
            <div class="contacts__item">
              <div class="contacts__icon">
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
              <div class="contacts__content">
                <div class="contacts__label">
                  {{ content.phoneContent.label }}
                </div>
                <div class="contacts__value">
                  <a href="tel:+79112343434">{{
                    content.phoneContent.phoneNumber
                  }}</a>
                </div>
              </div>
            </div>
            <!-- .contacts__item -->
            <div class="contacts__item">
              <div class="contacts__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#email"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
              <div class="contacts__content">
                <div class="contacts__label">
                  {{ content.mailContent.label }}
                </div>
                <div class="contacts__value">
                  <a href="mailto:mail@mail.ru">{{
                    content.mailContent.mail
                  }}</a>
                </div>
              </div>
            </div>
            <!-- .contacts__item -->
            <div class="contacts__item">
              <div class="contacts__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#globe"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
              <div class="contacts__content">
                <div class="contacts__label">
                  {{ content.officeContent.label }}
                </div>
                <div class="contacts__value">
                  {{ content.officeContent.address }}
                </div>
              </div>
            </div>
            <!-- .contacts__item -->
          </div>
          <!-- .contacts -->
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
            :empty="content.formContent.empty"
          />
          <!-- <div class="main-form__field main-form__field--xl mt-10">
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

  <div class="section-map">
    <div class="section-map__image">
      <Image
        :image="content.mapImage"
        :altName="content.mapImageAlt"
        :className="content.mapImageClass"
      />
      <!-- <img src="@img/content/map.jpg" class="img-cover" alt="" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const headingContent = {
  title: "Contact us",
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
const sectionContent = {
  tag: "Convenient",
  title: "Get in touch",
  text: `Travel offers a wide range of home goods that can be personalized to
          match your unique taste. Choose from personalized designs.`,
};
// const contactsContent = [
//   {
//     label: "Phone",
//     value: "+7 (911) 234-34-34",
//   },
// ];
const phoneContent = {
  label: "Phone",
  value: "+7 (911) 234-34-34",
};
const mailContent = {
  label: "Mail",
  value: "mail@mail.ru",
};
const officeContent = {
  label: "Office",
  value: "123, Main St. Sydney NSW 2000, Australia",
};
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
  },

  sectionContent: {
    tag: "",
    title: "",
    text: "",
  },
  phoneContent: {
    label: "",
    phoneNumber: "",
  },
  mailContent: {
    label: "",
    mail: "",
  },
  officeContent: {
    label: "",
    address: "",
  },
  formContent: {
    checkboxLabel: "",
    textButton: "",
    empty: true,
  },
  introImage: {
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
  introImageAlt: "",
  introImageClass: "",
  mapImage: {
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
  mapImageAlt: "",
  mapImageClass: "",
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/contact${query}`);

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
