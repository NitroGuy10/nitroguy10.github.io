<script lang="ts" setup>
  import { SongData } from "~~/data/types";
  import _discography from "@/data/song_data.json";
  const discography: SongData = _discography;

  const route = useRoute();

  const songId = route.params.song_id;
  if (typeof songId !== "string") { throw new TypeError("songId parameter is not a string"); }
  const songData = discography.songs[songId];

  definePageMeta({ layout: "music" });
</script>

<template>
    <div>
      <div class="grid grid-cols-2">
        <div>
          <h1 class="text-5xl font-bold">{{ songData.name }}</h1>
          <p>{{ songData.description }}</p>
          <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
        </div>
        <div>
          <img :src="'/images/music/' + songData.coverLink">
        </div>
      </div>
      <p>{{ songData }}</p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
</template>
