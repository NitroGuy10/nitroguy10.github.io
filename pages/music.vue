<script lang="ts" setup>
  import { format } from "date-fns";
  import { NitroGuy, SongData, Song, Collection, CollectionIncludingSongs, isSong, getCollectionsIncludingSongs, listingLink } from "@/data/types";
  import _nitroguy from "@/data/nitroguy.json";
  import _discography from "@/data/song_data.json";
  const nitroguy: NitroGuy = _nitroguy;
  const discography: SongData = _discography;

  // Show collections as one listing, but show singles and remixes as their own listings
  const collectionsIncludingSongs = getCollectionsIncludingSongs(discography.collections, discography.songs);
  const listings: (Song|CollectionIncludingSongs)[] = [];
  for (const collectionName in collectionsIncludingSongs)
  {
    const collection: CollectionIncludingSongs = collectionsIncludingSongs[collectionName];
    if (collection.isFormalCollection)
    {
      listings.push(collection);
    }
    else
    {
      for (const songName in collection.songs)
      {
        const song: Song = collection.songs[songName];
        listings.push(song);
      }
    }
  }

  // Sort by release date
  listings.sort((a, b) => {
    if (!a.releaseDate || !b.releaseDate)
    {
      throw new Error("Song or collection has no release date; cannot sort");
    }

    const aDate = new Date(a.releaseDate);
    const bDate = new Date(b.releaseDate);

    return aDate.getTime() - bDate.getTime();
  });
  listings.reverse();

  definePageMeta({ layout: "music-root" });
</script>

<template>
  <div id="music">
    <p>I produce EDM under the alias "The Sass".</p>
    <p>If you wanna have a listen, check me out on <NuxtLink :to="nitroguy.socials.youtube.link">YouTube</NuxtLink>, <NuxtLink :to="nitroguy.socials.soundcloud.link">SoundCloud</NuxtLink>, and <NuxtLink :to="nitroguy.socials.spotify.link">Spotify</NuxtLink>.</p>
    <p>Or, if you'd prefer, read about story behind each of my tracks (and download them too).</p>
    <hr class="mb-10">

    <div v-for="listing of listings" class="mb-10">
      <div class="grid grid-cols-3">
        <div class="w-full col-span-2">
          <NuxtLink :to="listingLink(listing)" class="no-underline">
            <h1 v-if="!isSong(listing) || !listing.nameParenthesesLinebreak" class="text-2xl md:text-4xl font-bold mb-3">{{ listing.name }}</h1>
            <h1 v-if="isSong(listing) && listing.nameParenthesesLinebreak" class="text-2xl md:text-4xl font-bold mb-0">{{ listing.name.split("(")[0] }}</h1>
            <h1 v-if="isSong(listing) && listing.nameParenthesesLinebreak" class="text-2xl md:text-4xl font-bold mb-3">({{ listing.name.split("(").slice(1).join("") }}</h1>
          </NuxtLink>
          <p class="text-xl text-zinc-400 mb-0">{{ listing.releaseDate ? format(new Date(listing.releaseDate), "d MMMM yyyy") : "something broke lol" }}</p>
          <p class="text-xl text-zinc-400">({{ isSong(listing) ? "Single" : (Object.keys(listing.songs).length + " songs") }})</p>
          <!-- <ul v-if="!isSong(listing)" class="list-disc ml-16">
            <li v-for="song in listing.songs">
              <p class="mb-1 text-xl"><NuxtLink :to="listingLink(song)">{{ song.name }}</NuxtLink></p>
            </li>
          </ul> -->
        </div>
        <div>
          <NuxtLink :to="listingLink(listing)"><img :src="'/images/music/' + listing.coverLink" :alt="listing.name" width="250" height="250" class="ml-auto"></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
