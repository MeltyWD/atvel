<template>
  <div class="intro">
    <div class="intro__main">
      <div class="container">
        <div class="intro__header">
          <div class="intro__title">
            {{ content.title }}
          </div>
          <div class="intro__lead">
            {{ content.lead }}
          </div>
        </div>
        <div v-if="list" class="intro__content intro__content--two">
          <ul class="intro__item" v-for="item in listItems">
            <li class="intro__text">
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .intro__main -->
    <div class="intro__media">
      <Image :image="image" :altName="altName" :className="className" />
      <!-- <img src="@img/intro_image2.jpg" class="img-cover" alt="" /> -->
    </div>
    <!-- .intro__item -->
  </div>
  <!-- .intro -->
</template>

<script setup lang="ts">
defineProps<{
  content: {
    title: string;
    lead: string;
    text?: string;
  };
  listItems?: {
    text: string;
  }[];
  list?: boolean;
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
          source: {
            url: string;
          };
        };
      };
    };
  };
  altName: string;
  className: string;
}>();
</script>

<style scoped>
.intro {
  color: white;
  background-color: white;
  overflow: hidden;
  position: relative;
  padding-bottom: 6.25rem;
}

.intro__media {
  top: 0;
  left: 0;
  right: 0;
  bottom: 6.25rem;
  z-index: 1;
  position: absolute;
}

.intro__media:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  opacity: 0.5;
  content: "";
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(16, 24, 32, 0.8) 0%,
    rgba(16, 24, 32, 0.9) 73%,
    rgba(16, 24, 32, 0.9) 100%
  );
}

.intro__main {
  z-index: 20;
  position: relative;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
}

.intro__header {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
}

.intro__title {
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  text-transform: uppercase;
  font-family: var(--font-secondary);
}

.intro__lead {
  color: var(--light);
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.intro__content {
  margin: 2.5rem auto 0 auto;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: grid;
  grid-row-gap: 2.5rem;
  grid-template-columns: 1fr;
}
.intro__item {
  list-style: none;
}
.intro__num {
  color: var(--light);
  margin-bottom: 0.625rem;
}

.intro__text {
  padding-top: 0.625rem;
  border-top: 1px solid var(--light);
}
@media (min-width: 768px) {
  .intro {
    padding-bottom: 2.5rem;
  }
  .intro__media {
    bottom: 2.5rem;
  }
  .intro__main {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .intro__header {
    flex-direction: row;
    justify-content: space-between;
  }
  .intro__title {
    width: 21.25rem;
    flex-shrink: 0;
  }
  .intro__lead {
    width: 20.625rem;
    flex-shrink: 0;
  }
  .intro__content {
    margin-top: 1.875rem;
    max-width: 67.5rem;
    grid-column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .intro__lead {
    width: 25rem;
  }
  .intro__content {
    width: 56.25rem;
  }
}

@media (min-width: 1250px) {
  .intro {
    padding-bottom: 6.25rem;
  }
  .intro__media {
    bottom: 6.25rem;
  }
  .intro__main {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
  .intro__header {
    width: 49.375rem;
    text-align: center;
    row-gap: 1.875rem;
    flex-direction: column;
  }
  .intro__title {
    width: auto;
    font-size: 2.25rem;
    line-height: 2.6875rem;
  }
  .intro__lead {
    width: 45rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.375rem;
  }
  .intro__content {
    margin-top: 3.75rem;
    font-size: 1rem;
    line-height: 1.375rem;
    grid-column-gap: 2.5rem;
  }
}
</style>
