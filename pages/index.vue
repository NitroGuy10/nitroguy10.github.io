<script lang="ts" setup>
  import nitroguy from "@/data/nitroguy.json";
</script>

<template>
  <div id="index">
    <div id="about-me" class="md:text-justify text-xl md:text-2xl">
      <p>Hi there!</p>
      <div class="flex flex-row gap-2 mb-4">
        <p>I'm Naveen Iyer (<NuxtLink to="/links">NitroGuy</NuxtLink>) and I like to make stuff! My hobbies include programming, producing music, editing videos, playing video games, and sleeping.</p>
        <img src="/public/images/faces/1_white.png" alt="Smiley Face" class="hidden md:block opacity-[0.81] w-[100px] h-[100px] select-none" draggable="false">
      </div>
      <div class="flex flex-row gap-2 mb-4">
        <img src="/public/images/faces/2_white.png" alt="Smiley Face" class="hidden md:block opacity-[0.81] w-[100px] h-[100px] select-none" draggable="false">
        <p>I am a passionate software engineer who loves to build cool things! Check out my <NuxtLink :to="nitroguy.socials.github.link">GitHub</NuxtLink> or read my personal commentary on the <NuxtLink to="/projects">projects</NuxtLink> I've made. I also love doing <NuxtLink :to="nitroguy.socials.github.link + '#hackathon-projects-'">hackathons</NuxtLink> and have made a lot of great memories and projects during them.</p>
      </div>
      <div class="flex flex-row gap-2 mb-4">
        <p>I am chronically addicted to music. I love playing, producing, and listening to it. I've loved a variety of genres over the years but right now I am most fixated on <NuxtLink to="/tangents/dubstep-subgenres">dubstep</NuxtLink> and EDM. Check out my <NuxtLink to="/music">discography</NuxtLink> or visit my <NuxtLink :to="nitroguy.socials.soundcloud.link">SoundCloud</NuxtLink> if you're into that kind of stuff.</p>
        <img src="/public/images/faces/8_white.png" alt="Smiley Face" class="hidden md:block opacity-[0.81] w-[100px] h-[100px] select-none" draggable="false">
      </div>
      <div class="flex flex-row gap-2 mb-4">
        <img src="/public/images/faces/4_white.png" alt="Smiley Face" class="hidden md:block opacity-[0.81] w-[100px] h-[100px] select-none" draggable="false">
        <p>I love and am endlessly inspired by the worlds that video games create. Some of my all-time favorites include Minecraft, Factorio, the Ace Attorney series, Stardew Valley, and <NuxtLink to="/tangents/favorite-games">more</NuxtLink>. I've also made a couple of <NuxtLink :to="nitroguy.socials.github.link + '#games-'">games</NuxtLink> for game jams or just for fun.</p>
      </div>
    </div>
  </div>
</template>
