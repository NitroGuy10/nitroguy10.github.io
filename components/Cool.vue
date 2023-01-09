<script lang="ts" setup>
  const props = defineProps<{
    num: string,
    punct?: string
  }>();


</script>

<template>
  <p class="text-green-400">Cool! {{ props.num }} <span :v-if="punct">{{ props.punct }}</span></p>
</template>
