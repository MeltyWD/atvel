<template>
  <header class="header">
    <div class="container">
      <div class="header__main">
        <div class="header__nav">
          <ul class="header-nav">
            <li>
              <NuxtLink to="/" prefetch><span>Home appliances</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" prefetch><span>About us</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" prefetch><span>Contact</span></NuxtLink>
            </li>
            <li>
              <a href="#">
                <span>Product</span>
                <i>
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#arrow_down"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </i>
              </a>
              <ul>
                <li>
                  <a href="#">Product One</a>
                </li>
                <li>
                  <a href="#">Product Two</a>
                </li>
                <li>
                  <a href="#">Product Three</a>
                </li>
                <li>
                  <a href="#">Product Four</a>
                </li>
                <li>
                  <a href="#">Product Five</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="/" class="header__logo">
          <i class="header__logo--base">
            <img src="@img/logo.svg" alt="" class="img-fluid" />
          </i>
          <i class="header__logo--inverse">
            <img src="@img/logo_white.svg" alt="" class="img-fluid" />
          </i> </a
        ><!-- .header__logo -->
        <div class="header__content">
          <div class="header__call">
            <a href="tel:+79112343434" class="header-phone">
              <i class="header-phone__icon">
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
              </i>
              <span class="header-phone__number">+7 (911) 234-34-34</span> </a
            ><!-- .header-phone -->
            <div class="header-callback" data-dropdown>
              <button
                type="button"
                class="header-callback__button"
                data-dropdown-toggle
              >
                <i>
                  <svg
                    class="ico-svg"
                    viewBox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#icon_info"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </i>
              </button>
              <div class="header-callback__content" data-dropdown-content>
                <form>
                  <div class="header-callback__form">
                    <div class="header-callback__item">
                      <label class="field">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full name"
                          autocomplete="off"
                        />
                      </label>
                    </div>
                    <div class="header-callback__item">
                      <label class="field">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          autocomplete="off"
                        />
                      </label>
                    </div>
                    <div class="header-callback__message">
                      <label class="field">
                        <textarea
                          name="message"
                          placeholder="Message (optional)"
                          data-dynamic
                        ></textarea>
                      </label>
                    </div>
                  </div>
                  <div class="header-callback__footer">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        name="check"
                        class="checkbox__input"
                        checked
                      />
                      <span class="checkbox__label">I agree to the Terms</span>
                    </label>
                    <div class="header-callback__send">
                      <button type="submit" class="btn btn-md btn-red">
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- .header-callback -->
          </div>
          <a href="mailto:mail@mail.ru" class="header-email">
            <i>
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
            </i>
            <span>mail@mail.ru</span> </a
          ><!-- .header-email -->
          <div class="mini-cart" data-dropdown>
            <button
              type="button"
              class="mini-cart__button"
              data-dropdown-toggle
            >
              <span class="mini-cart__count">3</span>
              <i class="mini-cart__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#cart"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i></button
            ><!-- .mini-cart__button -->
            <div class="mini-cart__content" data-dropdown-content>
              <div class="mini-cart__list">
                <div class="mini-cart__item">
                  <a href="#" class="mini-cart__image">
                    <img
                      src="@img/content/mini_cart_image.png"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                  <div class="mini-cart__description">
                    <div class="mini-cart__title">
                      <NuxtLink to="/product">Product name</NuxtLink>
                    </div>
                    <div class="mini-cart__text">
                      Количество:
                      <span class="color-black">1</span>
                    </div>
                    <div class="mini-cart__price">
                      <span class="color-red">$</span>
                      590
                    </div>
                  </div>
                </div>
                <!-- .mini-cart__item -->
                <div class="mini-cart__item">
                  <a href="#" class="mini-cart__image">
                    <img
                      src="@img/content/mini_cart_image.png"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                  <div class="mini-cart__description">
                    <div class="mini-cart__title">
                      <NuxtLink to="/product">Product name</NuxtLink>
                    </div>
                    <div class="mini-cart__text">
                      Количество:
                      <span class="color-black">1</span>
                    </div>
                    <div class="mini-cart__price">
                      <span class="color-red">$</span>
                      590
                    </div>
                  </div>
                </div>
                <!-- .mini-cart__item -->
                <div class="mini-cart__item">
                  <a href="#" class="mini-cart__image">
                    <img
                      src="@img/content/mini_cart_image.png"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                  <div class="mini-cart__description">
                    <div class="mini-cart__title">
                      <NuxtLink to="/product">Product name</NuxtLink>
                    </div>
                    <div class="mini-cart__text">
                      Количество:
                      <span class="color-black">1</span>
                    </div>
                    <div class="mini-cart__price">
                      <span class="color-red">$</span>
                      590
                    </div>
                  </div>
                </div>
                <!-- .mini-cart__item -->
              </div>
              <!-- .mini-cart__list -->
              <div class="mini-cart__footer">
                <div class="mini-cart__summary">
                  <div class="mini-cart__label">Итого:</div>
                  <div class="mini-cart__total">
                    <span class="color-red">$</span>
                    590
                  </div>
                </div>
                <div class="mini-cart__send">
                  <NuxtLink to="/cart" class="btn btn-md btn-red" prefetch>
                    <span>Buy</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- .mini-cart__content -->
          </div>
          <!-- .mini-cart -->
          <button type="button" class="header-burger" data-nav-toggle>
            <i class="header-burger__menu">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#menu"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </i>
            <i class="header-burger__close">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#close"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </i></button
          ><!-- .header-burger -->
        </div>
        <!-- .header__content -->
      </div>
    </div>
  </header>

  <NavMobile />
</template>

<script setup lang="ts"></script>
