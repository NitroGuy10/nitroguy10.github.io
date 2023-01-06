<script lang="ts" setup>
  const SONGS = ["Candy_Fractals", "Soaring", "Endless"];


</script>

<template>
  <div id="root" class="">
    <div id="background" class="min-h-screen double-gradient-bluegreen dark:double-gradient-redorange transition duration-[3000]">
      <div id="page" class="min-h-screen mx-auto w-[95%] p-10 shadow-2xl bg-white dark:bg-zinc-700 dark:text-zinc-200 transition duration-[3000]">  
        <div id="content" class="mx-auto max-w-4xl">
          <h1>NitroGuy</h1>
          <p>text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and text and </p>
          <Cool />
          <Cool />
          <Cool />
          <Cool />
          <Cool />

          <ul>
            <li v-for="song of SONGS"><NuxtLink :to="'./songs/' + song" class="text-blue-400 underline">{{ song }}</NuxtLink></li>
          </ul>

          <button class="border-2 border-black rounded-lg">background</button>
      
        </div>
      </div>
    </div>
  </div>
</template>
