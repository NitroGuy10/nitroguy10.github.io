<script lang="ts" setup>
  const SONGS = ["Candy_Fractals", "Soaring", "Endless"];


</script>

<template>
  <div id="page" class="min-h-screen test">
    <div id="content" class="mx-auto w-fit">
      <h1>NitroGuy</h1>
      <Cool />
      <Cool />
      <Cool />
      <Cool />
      <Cool />

      <ul>
        <li v-for="song of SONGS"><NuxtLink :to="'./songs/' + song" class="text-blue-400 underline">{{ song }}</NuxtLink></li>
      </ul>
  
    </div>
  </div>
</template>
