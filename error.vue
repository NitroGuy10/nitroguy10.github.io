
<script lang="ts" setup>
  const fourtyTimes = [...Array(40).keys()];
</script>

<template>
  <div>
    <Body class="bg-zinc-900 text-zinc-300 overflow-hidden select-none" />

    <div v-for="num in fourtyTimes" class="absolute top-0 left-0 bottom-0 right-0 spin-cw" :style="'animation-delay: -' + (num / 4) + 's;'">
      <p class="text-[3vh] hidden md:inline absolute top-[10%] left-1/2 -translate-x-1/2">404</p>
    </div>
    <div v-for="num in fourtyTimes" class="absolute top-0 left-0 bottom-0 right-0 spin-ccw" :style="'animation-delay: -' + (num / 4) + 's;'">
      <p class="text-[3vh] hidden md:inline absolute top-[5%] left-1/2 -translate-x-1/2">404</p>
    </div>

    <div class="flex justify-center items-center h-screen">
      <div class="text-center">
        <h1 class="text-9xl mb-8">404</h1>
        <h1 class="text-5xl sm:text-7xl">LOLOLOLOL</h1>
      </div>
    </div>
  </div>
</template>

<style>
  @keyframes spin-cw {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-ccw {
    to {
      transform: rotate(-360deg);
    }
  }
  .spin-cw {
    animation: spin-cw 10s linear infinite;
  }
  .spin-ccw {
    animation: spin-ccw 10s linear infinite;
  }
</style>
