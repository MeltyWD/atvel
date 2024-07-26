<template>
  <div class="heading">
    <div class="container">
      <div class="heading__wrap heading__wrap--center">
        <div class="heading__title">Contact us</div>
        <div class="heading__text">
          Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.
        </div>
      </div>
    </div>
  </div>
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
      </div>
    </div>
    <!-- .intro__main -->
    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>
    <!-- .intro__item -->
  </div>
  <!-- .intro -->

  <div class="section section--top-md section--bottom-sm">
    <div class="container">
      <div class="section__tag">Convenient</div>
      <div class="section__header section__header--sm">
        <h2 class="section__title">Get in touch</h2>
      </div>
      <div class="section-intro">
        <div class="section-intro__text">
          Travel offers a wide range of home goods that can be personalized to
          match your unique taste. Choose from personalized designs.
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
                <div class="contacts__label">Phone</div>
                <div class="contacts__value">
                  <a href="tel:+79112343434">+7 (911) 234-34-34</a>
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
                <div class="contacts__label">Mail</div>
                <div class="contacts__value">
                  <a href="mailto:mail@mail.ru">mail@mail.ru</a>
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
                <div class="contacts__label">Office</div>
                <div class="contacts__value">
                  123, Main St. Sydney NSW 2000, Australia
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
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="section-map">
    <div class="section-map__image">
      <img src="@img/content/map.jpg" class="img-cover" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
