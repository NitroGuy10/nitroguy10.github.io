<script lang="ts" setup>
  const props = defineProps<{
    title: string,
    timeframe: string,
    languages?: string,
    technologies?: string,
    imageLink?: string,
    imageAlt?: string,
    image2Link?: string,
    image2Alt?: string
  }>();
</script>

<template>
  <div :id="title" class="ProjectsEntry">
    <hr class="mb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h3 class="font-bold text-3xl mb-5"><a :href="'#' + title" class="no-underline hover:cursor-pointer">{{ props.title }}</a></h3>
        <p class="font-semibold">{{ props.timeframe }}</p>
        <p v-if="props.languages" class="font-semibold">{{ props.languages }}</p>
        <p v-if="props.technologies" class="font-semibold">{{ props.technologies }}</p>
      </div>
      <div v-if="props.imageLink">
        <img :src="props.imageLink" :alt="props.imageAlt" class="h-fit">
      </div>
      <div v-if="props.image2Link">
        <img :src="props.image2Link" :alt="props.image2Alt" class="h-fit">
      </div>
    </div>
    <slot />
  </div>
</template>
