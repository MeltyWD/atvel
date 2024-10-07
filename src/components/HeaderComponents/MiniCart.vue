<template>
  <div class="mini-cart" data-dropdown>
    <button type="button" class="mini-cart__button" data-dropdown-toggle>
      <!-- <span class="mini-cart__count">{{ cartState.length }}</span> -->
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
      </i>
    </button>
    <!-- .mini-cart__button -->
    <div class="mini-cart__content" data-dropdown-content>
      <div class="mini-cart__list">
        <div
          class="mini-cart__item"
          v-for="{ attributes: product } of products"
        >
          <NuxtLink :to="`/product/${product.link}`" class="mini-cart__image">
            <img
              :src="`${baseUrl}${product.image.data.attributes.formats.thumbnail.url}`"
              class="img-cover"
              :alt="product.image.data.attributes.alternativeText"
            />
          </NuxtLink>
          <div class="mini-cart__description">
            <div class="mini-cart__title">
              <NuxtLink :to="`/product/${product.link}`">{{
                product.title
              }}</NuxtLink>
            </div>
            <div class="mini-cart__text">
              Количество:
              <span class="color-black">1</span>
            </div>
            <div class="mini-cart__price">
              <span class="color-red">$</span>
              {{
                Math.ceil(
                  product.price - (product.discount / 100) * product.price
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <!-- .mini-cart__list -->
      <div class="mini-cart__footer">
        <div class="mini-cart__summary">
          <div class="mini-cart__label">Итого:</div>
          <div class="mini-cart__total">
            <span class="color-red">$</span>
            {{
              products.reduce(
                (acc, cur) =>
                  acc +
                  Math.ceil(
                    cur.attributes.price -
                      (cur.attributes.discount / 100) * cur.attributes.price
                  ),
                0
              )
            }}
          </div>
        </div>
        <div class="mini-cart__send">
          <NuxtLink to="/cart" class="btn btn-md btn-red" prefetch>
            <span>Buy</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartState } from "~/src/composables/useCartState";
import { useLocale } from "~/src/composables/useLocale";

const config = useRuntimeConfig();

const baseUrl = config.public.baseURL;

const locale = useLocale();

const cartState = useCartState();

const products = ref<any[]>([]);

const { find } = useStrapi();

const getProduct = async () => {
  const data = await find("products", {
    filters: {
      article: {
        $eq: cartState.value.map((x) => x.article),
      },
    },
    populate: "*",
    locale: locale.value,
  })
    // @ts-ignore
    .then((x) => x.data)
    .catch((error) => console.log(error));

  if (data) {
    console.log(data);

    products.value = data;
  }
};

watch(cartState, async () => {
  console.log(cartState.value);

  await getProduct();
});
</script>

<style scoped></style>
