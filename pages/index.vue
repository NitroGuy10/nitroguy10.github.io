<script lang="ts" setup>
  const SONGS = ["Candy_Fractals", "Soaring", "Endless"];


</script>

<template>
  <Body class="bg-zinc-800 text-zinc-300"></Body>
  <div id="root">
    <div id="page">  
      <div id="content" class="mx-auto max-w-4xl">
        <h1 class="text-9xl font-bold text-center">NitroGuy</h1>
        <p>text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and </p>
        <Cool num="1"/>
        <Cool num="2"/>
        <Cool num="3"/>
        <Cool num="4"/>
        <Cool num="5" punct="!!!"/>

        <ul>
          <li v-for="song of SONGS"><NuxtLink :to="'./songs/' + song" class="text-blue-400 underline">{{ song }}</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
