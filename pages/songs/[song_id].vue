<script lang="ts" setup>
    const route = useRoute();

    const songId = route.params.song_id;
</script>

<template>
    <div>
      <h1>{{ songId }} is such a cool song!!!</h1>
    </div>
</template>
