<script lang="ts" setup>
  import { SongData } from "@/data/types";
  import _discography from "@/data/song_data.json";
  const discography: SongData = _discography;

  const route = useRoute();

  const collectionId = route.params.collection_id;
  if (typeof collectionId !== "string") { throw new TypeError("collectionId parameter is not a string"); }
  const collectionData = discography.collections[collectionId];

  definePageMeta({ layout: "music" });
</script>

<template>
  <div>
    <p>{{ collectionData.name }}</p>
  </div>
</template>