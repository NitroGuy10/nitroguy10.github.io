<script lang="ts" setup>
  import { format } from "date-fns";
  import { type SongData, listingLink, getRealNames } from "@/data/types";
  import _discography from "@/data/song_data.json";
  const discography: SongData = _discography;

  const route = useRoute();

  const safeSongID = route.params.song_id;
  if (typeof safeSongID !== "string") { throw new TypeError("song_id parameter is not a string"); }
  const songId = getRealNames(discography)[safeSongID];
  const song = discography.songs[songId];
  if (!song) { throw new TypeError("Cannot find song\nsafeSongID: " + safeSongID + "\nsongID: " + songId + "\n"); }
  const songCollection = discography.collections[song.collection];

  definePageMeta({ layout: "music" });
</script>

<template>
    <div>
      <div class="grid grid-cols-3">
        <div class="col-span-2 mr-2 md:mr-4">
          <h1 class="text-3xl md:text-5xl font-bold mb-3">{{ song.name }}</h1>
          <p class="text-xl text-zinc-400 mb-0">Released: {{ song.releaseDate ? format(new Date(song.releaseDate), "d MMMM yyyy") : "something broke lol" }}</p>
          <p class="text-xl text-zinc-400 mb-0">Genre: {{ song.genre }}</p>
          <p class="text-xl text-zinc-400 mb-0">Cover Artist: <NuxtLink :to="song.coverArtistLink" :class="song.coverArtistLink ? '' : 'no-underline'">{{ song.coverArtistName }}</NuxtLink></p>
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
                <SocialIcon :link-type="link.type" />
                <span class="underline">{{ link.type }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div v-if="song.downloadLinks">
            <h2 class="text-3xl font-bold mb-3">Free Download</h2>
            <p v-for="link in song.downloadLinks" class="mb-2">(<NuxtLink :to="link.link">{{ link.type }}</NuxtLink>)</p>
          </div>
        </div>
      </div>
    </div>
</template>
