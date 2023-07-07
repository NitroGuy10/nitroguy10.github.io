<script lang="ts" setup>
  import { format } from "date-fns";
  import _nitroguy from "@/data/nitroguy.json";
  import _discography from "@/data/song_data.json";
  import { NitroGuy, SongData, getCollectionsIncludingSongs, listingLink, getRealNames } from "@/data/types";
  const nitroguy: NitroGuy = _nitroguy;
  const discography: SongData = _discography;

  const route = useRoute();

  const collectionsIncludingSongs = getCollectionsIncludingSongs(discography.collections, discography.songs);
  const safeCollectionId = route.params.collection_id;
  if (typeof safeCollectionId !== "string") { throw new TypeError("collection_id parameter is not a string"); }
  const collectionId = getRealNames(discography)[safeCollectionId];
  const collection = collectionsIncludingSongs[collectionId];
  const collectionSongsList = Object.values(collection.songs);

  if (!collection.isFormalCollection)
  {
    collectionSongsList.reverse();
  }

  const socialIcons: {[key: string]: string} = {};
  for (const socialName in nitroguy.socials)
  {
    const social = nitroguy.socials[socialName];
    socialIcons[social.type] = social.icon;
  }

  definePageMeta({ layout: "music" });
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold mb-3">{{ collection.name }}</h1>
    <p v-if="collection.releaseDate" class="text-xl text-zinc-400 mb-3">Released: {{ format(new Date(collection.releaseDate), "d MMMM yyyy") }}</p>
    <p class="mb-5">{{ collection.description }}</p>
    <ul>
      <li v-for="link in collection.streamLinks" class="mb-2">
        <NuxtLink :to="link.link" class="no-underline">
          <img v-if="socialIcons[link.type]" :src="'/' + socialIcons[link.type]" width="30" height="30" class="inline mr-1">
          <span class="underline">{{ link.type }}</span>
        </NuxtLink>
      </li>
    </ul>
    <hr class="my-7">
    <div v-for="song of collectionSongsList" class="mb-10">
      <div class="grid grid-cols-3">
        <div class="w-full col-span-2">
          <NuxtLink :to="listingLink(song)" class="no-underline">
            <h1 v-if="!song.nameParenthesesLinebreak" class="text-2xl sm:text-4xl font-bold mb-3">{{ song.name }}</h1>
            <h1 v-if="song.nameParenthesesLinebreak" class="text-2xl sm:text-4xl font-bold mb-0">{{ song.name.split("(")[0] }}</h1>
            <h1 v-if="song.nameParenthesesLinebreak" class="text-2xl sm:text-4xl font-bold mb-3">({{ song.name.split("(").slice(1).join("") }}</h1>
          </NuxtLink>
          <p class="text-xl text-zinc-400 mb-0">Released: {{ format(new Date(song.releaseDate), "d MMMM yyyy") }}</p>
          <p class="text-xl text-zinc-400 mb-3">Genre: {{ song.genre }}</p>
          <p class="text-xl text-zinc-400 mb-3 hidden sm:inline">{{ song.description }}</p>
        </div>
        <div>
          <NuxtLink :to="listingLink(song)"><img :src="'/images/music/' + song.coverLink" :alt="song.name" width="250" height="250" class="ml-auto mb-4"></NuxtLink>
        </div>
      </div>
      <p class="text-xl text-zinc-400 mb-3 sm:hidden">{{ song.description }}</p>
    </div>
  </div>
</template>
