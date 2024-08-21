<template>
  <div class="container container--md">
    <div class="section__top">
      <div class="section__rating">
        <RatingStars rating="3.5" />
      </div>
    </div>
    <div class="section__header">
      <h2 class="section__title">recent reviews</h2>
      <a href="#" class="section__link">Browse all</a>
    </div>
    <!-- .section__header -->
    <div class="section__body">
      <div class="swiper" data-comments>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="comment-item">
              <div class="comment-item__tag">Самый полезный отзыв</div>
              <div class="comment-item__header">
                <div class="comment-item__author">Ильнур</div>
                <div class="comment-item__date">25 march 2024</div>
              </div>
              <div class="comment-item__rating">
                <RatingStars rating="3.5" />
              </div>
              <div class="comment-item__content">
                <div class="comment-item__group">
                  <div class="comment-item__title">Advantage</div>
                  <div class="comment-item__text">
                    Atvel's website offers a seamless shopping experience with
                    easy navigation, ensuring that you can find and purchase
                    your desired home goods hassle-free. Our user-friendly
                    interface is designed to make your shopping journey
                    enjoyable and efficient.
                  </div>
                </div>
              </div>
            </div>
            <!-- .comment-item -->
          </div>
          <!-- .swiper-slide -->
          <div class="swiper-slide">
            <div class="comment-item">
              <div class="comment-item__header">
                <div class="comment-item__author">Александр</div>
                <div class="comment-item__date">25 march 2024</div>
              </div>
              <div class="comment-item__rating">
                <div class="rating" data-rating="3.5" data-readonly="true">
                  <div class="rating__body">
                    <div class="rating__stars">
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__active" data-rating-active>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__items">
                      <div class="rating__item" data-rating-item="5"></div>
                      <div class="rating__item" data-rating-item="4"></div>
                      <div class="rating__item" data-rating-item="3"></div>
                      <div class="rating__item" data-rating-item="2"></div>
                      <div class="rating__item" data-rating-item="1"></div>
                    </div>
                  </div>

                  <div class="rating__value" data-rating-value>3.5</div>

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <div class="comment-item__content">
                <div class="comment-item__group">
                  <div class="comment-item__title">Advantage</div>
                  <div class="comment-item__text">
                    <p>
                      Atvel's website offers a seamless shopping experience with
                      easy navigation.
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">Disadvantage</div>
                  <div class="comment-item__text">
                    <p>
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free.
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">Commentary</div>
                  <div class="comment-item__text">
                    Atvel's website offers a seamless shopping experience with
                    easy navigation, ensuring that you can find and purchase
                    your desired home goods hassle-free.
                  </div>
                </div>
              </div>
              <a href="#" class="comment-item__read">Read all</a>
            </div>
            <!-- .comment-item -->
          </div>
          <!-- .swiper-slide -->
          <div class="swiper-slide">
            <div class="comment-item">
              <div class="comment-item__header">
                <div class="comment-item__author">Александр</div>
                <div class="comment-item__date">25 march 2024</div>
              </div>
              <div class="comment-item__rating">
                <div class="rating" data-rating="3.5" data-readonly="true">
                  <div class="rating__body">
                    <div class="rating__stars">
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__active" data-rating-active>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__items">
                      <div class="rating__item" data-rating-item="5"></div>
                      <div class="rating__item" data-rating-item="4"></div>
                      <div class="rating__item" data-rating-item="3"></div>
                      <div class="rating__item" data-rating-item="2"></div>
                      <div class="rating__item" data-rating-item="1"></div>
                    </div>
                  </div>

                  <div class="rating__value" data-rating-value>3.5</div>

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <div class="comment-item__content">
                <div class="comment-item__group">
                  <div class="comment-item__title">Advantage</div>
                  <div class="comment-item__text">
                    <p>
                      Atvel's website offers a seamless shopping experience with
                      easy navigation.
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">Disadvantage</div>
                  <div class="comment-item__text">
                    <p>
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free.
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">Commentary</div>
                  <div class="comment-item__text">
                    Atvel's website offers a seamless shopping experience with
                    easy navigation, ensuring that you can find and purchase
                    your desired home goods hassle-free.
                  </div>
                </div>
              </div>
              <a href="#" class="comment-item__read">Read all</a>
            </div>
            <!-- .comment-item -->
          </div>
          <!-- .swiper-slide -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
