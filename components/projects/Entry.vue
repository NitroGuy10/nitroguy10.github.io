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
    <h3 class="font-bold text-3xl mb-5"><NuxtLink :to="'#' + title" class="no-underline hover:cursor-pointer">{{ props.title }}</NuxtLink></h3>
    <div :class="'grid grid-cols-1 text-xl text-zinc-400 mb-5 ' + (props.image2Link ? 'sm:grid-cols-3 ' : 'sm:grid-cols-2 ')">
      <div :class="imageLink ? '' : 'col-span-2'">
        <p class="mb-0">{{ props.timeframe }}</p>
        <p v-if="props.languages" class="mb-0">{{ props.languages }}</p>
        <p v-if="props.technologies" class="mb-0">{{ props.technologies }}</p>
      </div>
      <div v-if="props.imageLink">
        <img :src="props.imageLink" :alt="props.imageAlt">
      </div>
      <div v-if="props.image2Link">
        <img :src="props.image2Link" :alt="props.image2Alt">
      </div>
    </div>
    <div class="mb-7">
      <slot />
    </div>
  </div>
</template>

<style>
@tailwind components;

@layer components {
  .project-link {
    @apply mb-1 text-xl text-zinc-400;
  }
}
</style>
