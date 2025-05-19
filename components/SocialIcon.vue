<script lang="ts" setup>
  import CssFilterConverter from "css-filter-converter";
  import _nitroguy from "@/data/nitroguy.json";
  import { type NitroGuy } from "@/data/types";

  const props = defineProps<{
    linkType: string,
    size?: string,
    colorHex?: string,
  }>();

  const nitroguy: NitroGuy = _nitroguy;

  const socialIcons: {[key: string]: string} = {};
  for (const socialName in nitroguy.socials)
  {
    const social = nitroguy.socials[socialName];
    socialIcons[social.type] = social.icon;
  }
</script>

<template>
  <img v-if="socialIcons[props.linkType]" :src="'/' + socialIcons[props.linkType]" :width="props.size || '30'" :height="props.size || '30'" class="inline mr-1" :style="`filter: ${CssFilterConverter.hexToFilter(props.colorHex || '#FFFFFF').color}`" :alt="props.linkType">
</template>
