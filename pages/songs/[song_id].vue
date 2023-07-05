<script lang="ts" setup>
  import { format } from "date-fns";
  import { SongData, NitroGuy, listingLink, getRealNames } from "@/data/types";
  import _nitroguy from "@/data/nitroguy.json";
  import _discography from "@/data/song_data.json";
  const discography: SongData = _discography;
  const nitroguy: NitroGuy = _nitroguy;

  const route = useRoute();

  const safeSongID = route.params.song_id;
  if (typeof safeSongID !== "string") { throw new TypeError("song_id parameter is not a string"); }
  const songId = getRealNames(discography)[safeSongID];
  const song = discography.songs[songId];
  const songCollection = discography.collections[song.collection];

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
      <div class="grid grid-cols-3">
        <div class="col-span-2">
          <h1 class="text-5xl font-bold mb-3">{{ song.name }}</h1>
          <p class="text-xl text-zinc-400 mb-0">Released: {{ song.releaseDate ? format(new Date(song.releaseDate), "d MMMM yyyy") : "something broke lol" }}</p>
          <p class="text-xl text-zinc-400 mb-0">Genre: {{ song.genre }}</p>
          <p class="text-xl text-zinc-400 mb-3">Collection: <NuxtLink :to="listingLink(songCollection)">{{ songCollection.name }}</NuxtLink></p>
          <p class="hidden md:inline">{{ song.description }}</p>
        </div>
        <div>
          <img :src="'/images/music/' + song.coverLink" width="400" height="400" class="ml-auto">
        </div>
        <div class="col-span-3 md:hidden">
          <p>{{ song.description }}</p>
        </div>
        <div class="col-span-3">
          <hr class="my-7">
        </div>
        <div class="col-span-2">
          <h2 class="text-3xl font-bold mb-3">Stream</h2>
          <ul>
            <li v-for="link in song.streamLinks" class="mb-2">
              <NuxtLink :to="link.link" class="no-underline">
                <img v-if="socialIcons[link.type]" :src="'/' + socialIcons[link.type]" width="30" height="30" class="inline mr-1">
                <span class="underline">{{ link.type }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-3">Free Download</h2>
          <p v-for="link in song.downloadLinks" class="mb-2">(<NuxtLink :to="link.link">{{ link.type }}</NuxtLink>)</p>
        </div>
      </div>
    </div>
</template>
