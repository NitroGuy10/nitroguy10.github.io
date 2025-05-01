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
        <h1 :class="mobileClass + ' text-7xl font-bold text-center mb-2 mt-1'"><a :href="props.href" class="no-underline">{{ props.name }}</a></h1>
    </div>
</template>

<style>
@media screen and (max-width: 360px)
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

@media screen and (max-width: 700px)
{
  .nitroguy-the-sass-mobile
  {
    font-size: 10vw;
  }
}
</style>
