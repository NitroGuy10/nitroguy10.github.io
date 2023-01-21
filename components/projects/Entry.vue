<script lang="ts" setup>
  const props = defineProps<{
    title: string,
    timeframe: string,
    languages: string,
    technologies: string,
    imageLink?: string
  }>();
</script>

<template>
  <div :id="title" class="ProjectsEntry">
    <hr class="mb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h3 class="font-bold text-3xl mb-5 hover:cursor-pointer"><a :href="'#' + title">{{ props.title }}</a></h3>
        <p class="font-semibold">{{ props.timeframe }}</p>
        <p class="font-semibold">{{ props.languages }}</p>
        <p class="font-semibold">{{ props.technologies }}</p>
      </div>
      <div v-if="props.imageLink">
        <img :src="props.imageLink" class="h-fit">
      </div>
    </div>
    <slot />
  </div>
</template>
