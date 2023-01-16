<script lang="ts" setup>
  import discography from "@/data/song_data.json";

  definePageMeta({ layout: "music" });
</script>

<template>
  <div id="index">
    <p>music</p>
    <ul>
      <li v-for="song of discography.songs"><NuxtLink :to="'./songs/' + song.name" class="text-blue-400 underline">{{ song.name }}</NuxtLink></li>
    </ul>
  </div>
</template>
