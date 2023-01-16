<script lang="ts" setup>
  const props = defineProps<{
    name: string,
    href: string
  }>();

  let mobileClass = "nitroguy-mobile";
  if (props.name === "The Sass")
  {
    mobileClass = "the-sass-mobile";
  }
  else if (props.name === "NitroGuy / The Sass")
  {
    mobileClass = "nitroguy-the-sass-mobile";
  }
</script>

<template>
    <div id="NameHeader">
        <h1 :class="mobileClass + ' text-9xl font-bold text-center mb-5'"><a :href="props.href">{{ props.name }}</a></h1>
    </div>
</template>

<style>
@media screen and (max-width: 640px)
{
  .nitroguy-mobile
  {
    font-size: 20vw;
  }

  .the-sass-mobile
  {
    font-size: 19vw;
  }
}

@media screen and (max-width: 1280px)
{
  .nitroguy-the-sass-mobile
  {
    font-size: 9vw;
  }
}
</style>
