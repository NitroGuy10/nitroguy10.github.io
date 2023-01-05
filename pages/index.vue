<script lang="ts" setup>
  const SONGS = ["Candy_Fractals", "Soaring", "Endless"];


</script>

<template>
    <div>
      <h1>Hello!</h1>
      <Cool />
      <Cool />
      <Cool />
      <Cool />
      <Cool />

      <ul>
        <li v-for="song of SONGS"><NuxtLink :to="'./songs/' + song" class="text-blue-400 underline">{{ song }}</NuxtLink></li>
      </ul>
  
    </div>
</template>
