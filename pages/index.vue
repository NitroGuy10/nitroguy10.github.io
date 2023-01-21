<script lang="ts" setup>
  import nitroguy from "@/data/nitroguy.json";
</script>

<template>
  <div id="index">
    <div id="about-me">
      <p>Hi there!</p>
      <p>I'm <NuxtLink to="/links" class="underline">NitroGuy</NuxtLink>. Currently, I am a human who lives on Earth. My hobbies include programming, producing music, editing videos, playing video games, and sleeping.</p>
      <p>I am highly interested in computer science and software development. I would call myself a "full-stack web developer" as of now but I am very eager to explore other facets of computer science. I've been coding since 2015 and I am proficient in Java, Python, HTML, CSS, JavaScript, TypeScript, C++, and C#. If you want to read more about my work, check out my <NuxtLink :to="nitroguy.socials.github.link" class="underline">GitHub</NuxtLink> or read my personal commentary on the <NuxtLink to="/projects" class="underline">projects</NuxtLink> I've made.</p>
      <p>I am chronically addicted to music. I love playing, producing, and listening to music. I've loved a variety of genres over the years but right now I am most fixated on <NuxtLink to="/tangents/dubstep-subgenres" class="underline">dubstep</NuxtLink> and EDM. Check out my <NuxtLink to="/music" class="underline">discography</NuxtLink> or visit my <NuxtLink :to="nitroguy.socials.soundcloud.link" class="underline">SoundCloud</NuxtLink> if you're into that kind of stuff.</p>
      <p>I love and am endlessly inspired by the worlds that video games create. They have been a massive part of my life but I hardly ever play them anymore and I want to get back into them! Some of my all-time favorites include Minecraft, Factorio, Team Fortress 2, the Ace Attorney series, Stardew Valley, and <NuxtLink to="/tangents/favorite-games" class="underline">more</NuxtLink>.</p>
      <p><NuxtLink to="https://en.pronouns.page/he" class="underline">he/him</NuxtLink></p>
    </div>
  </div>
</template>
