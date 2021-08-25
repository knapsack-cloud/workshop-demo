<template>
  <div
    v-bind:class="[
      'flex',
      'items-center',
      'dark:bg-gray-900'
    ]"
  >
    <div v-if="imgSrc" class="flex-shrink-0">
      <a href="#">
        <span v-if="author" class="sr-only">{{ author }}</span>
        <img class="h-10 w-10 rounded-full" :src="imgSrc" alt="image alt" />
      </a>
    </div>
    <div class="ml-3">
      <p v-if="author" class="text-sm font-medium text-gray-900 dark:text-white">
        <a href="#" class="hover:underline">{{ author }}</a>
      </p>
      <div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
        <time v-if="date" datetime="2020-03-10">{{ date }}</time>
        <span v-if="date && read" aria-hidden="true">·</span>
        <span v-if="read">{{ read }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    read: String,
    imgSrc: String,
    date: String,
    author: String,
  },
};
</script>