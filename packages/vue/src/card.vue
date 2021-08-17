<template>
  <div
    v-bind:class="[
      'ex-card',
    ]"
  >
    <img v-if="imgSrc" :src="imgSrc" class="ex-card_img" alt="image alt" />

    <div class="ex-card_body">
      <h4 class="ex-card_title" v-if="title">{{ title }}</h4>
      <h6 class="ex-card_subtitle" v-if="subtitle">{{ subtitle }}</h6>
      <div class="ex-card_content">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>