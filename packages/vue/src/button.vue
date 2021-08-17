<template>
  <button
    v-bind:class="[
      'ex-button',
      { 
        [`ex-button--${type}`]: true,
        [`ex-button--size-${size}`]: true,
        [`ex-button--disabled`]: disabled
      },
    ]"
    v-on:click="handleClick"
    v-bind:disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    /**
     * @values primary, outline-primary, secondary, success, danger
     */
    type: {
      type: String,
      default: 'primary',
    },
    /**
     * @values s, m, l
     */
    size: {
      type: String,
      required: false,
      default: 'm',
    },
    /**
    * @values true, false
    */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      /**
       * Triggers when clicked
       */
      this.$emit('btn-click');
      console.log('button clicked!');
    },
  },
};
</script>
