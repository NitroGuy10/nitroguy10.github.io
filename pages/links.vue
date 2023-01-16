<script lang="ts" setup>
  import nitroguy from "@/data/nitroguy.json";
  import { Social } from "@/data/types";

  const socialsToInclude = ["youtube", "soundcloud", "spotify", "github", "twitter", "musicTwitter", "website", "email"];

  const allSocials: { [key: string]: Social } = nitroguy.socials;
  const socials: Social[] = [];
  for (const socialName of socialsToInclude)
  {
    socials.push(allSocials[socialName]);
  }

  definePageMeta({ layout: "both" });
</script>

<template>
  <div id="links" class="max-w-2xl mx-auto">
    <div v-for="social of socials" class="social mb-10 text-center">
      <div class="social-name"><p :class="'text-4xl m-0 ' + (social.address ? '' : 'underline')"><img :src="'/' + social.icon" width="32" height="32" :class="social.address ? 'sm:inline hidden' : 'inline'"><NuxtLink :to="social.link" class="">{{ social.alternameName || social.address || social.type }}</NuxtLink></p></div>
    </div>
  </div>
</template>
