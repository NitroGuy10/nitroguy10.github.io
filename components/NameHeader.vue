<script lang="ts" setup>
  const props = defineProps<{
    name: string,
    href: string
  }>();
</script>

<template>
    <div id="NameHeader">
        <h1 class="text-9xl font-bold text-center mb-5"><a :href="props.href">{{ props.name }}</a></h1>
    </div>
</template>
