<script lang="ts" setup>
  import { NitroGuy, Social } from "@/data/types";
  import _nitroguy from "@/data/nitroguy.json";
  const nitroguy: NitroGuy = _nitroguy;

  const socialsToInclude = ["youtube", "soundcloud", "spotify", "github", "twitter", "musicTwitter", "instagram", "website", "email"];
  // TODO add instagram icon
  const allSocials = nitroguy.socials;
  const socials: Social[] = [];
  for (const socialName of socialsToInclude)
  {
    socials.push(allSocials[socialName]);
  }

  definePageMeta({ layout: "both" });
</script>

<template>
  <div id="links" class="max-w-2xl mx-auto">
    <div v-for="social of socials" class="social mb-2 text-center">
      <div class="social-name"><p class="text-2xl m-0"><img :src="'/' + social.icon" width="32" height="32" :class="social.address ? 'sm:inline hidden' : 'inline'"><NuxtLink :to="social.link" :class="social.address ? 'no-underline' : ''">{{ social.alternameName || social.address || social.type }}</NuxtLink></p></div>
    </div>
  </div>
</template>
