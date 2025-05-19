<script lang="ts" setup>
  import { type NitroGuy, type Social } from "@/data/types";
  import _nitroguy from "@/data/nitroguy.json";
  const nitroguy: NitroGuy = _nitroguy;

  const socialsToInclude = ["youtube", "soundcloud", "spotify", "github", "twitter", "musicTwitter", "instagram", "website", "email"];
  const allSocials = nitroguy.socials;
  const socials: Social[] = [];
  for (const socialName of socialsToInclude)
  {
    socials.push(allSocials[socialName]);
  }

  definePageMeta({ layout: "both" });
</script>

<template>
  <div id="links" class="mx-auto w-[200px] sm:w-[400px] md:w-[700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4">
    <div v-for="social of socials">
      <NuxtLink :to="social.link" class="no-underline">
        <div :class="`mb-2 text-center h-32 rounded-xl border-b-4 hover:border-b-2 hover:h-[126px] hover:mt-[2px] border-zinc-600 transition-all ${social.type !== 'Email' && 'active:border-b-0 active:h-[124px] active:mt-1'}`" :style="`background: ${social.color}`">
          <div class="grid grid-cols-1 h-full gap-2">
              <div class="max-h-[40px]"><SocialIcon :link-type="social.type" size="40" class="mt-3" /></div>
              <div>
                <span v-if="social.type === 'Email'" class="text-xl font-medium">
                  <p class="m-0">{{ social.username }}</p>
                  <p>at {{ social.emailDomain }} dot {{ social.emailTld }}</p>
                </span>
                <p v-else class="text-xl font-medium">{{ social.alternameName || social.type }}</p>
              </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
