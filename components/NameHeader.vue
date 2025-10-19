<script lang="ts" setup>
  const props = defineProps<{
    name: string
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

  const route = useRoute();
  const href = computed(() => {
    // If user is on /songs or /collections, link to /music, else link to /
    return (route.path.startsWith("/songs") || route.path.startsWith("/collections")) ? "/music" : "/";
  });

</script>

<template>
    <NuxtLink v-if="mobileClass === 'nitroguy-the-sass-mobile'" :to="href" class="no-underline block w-fit mx-auto">
      <div id="NameHeader" class="block w-[380px] h-[110px] relative text-7xl font-bold text-white nitroguy-the-sass-mobile-header">
        <h1 :class="mobileClass + ' opacity-[0.81] absolute top-0 left-0 mb-2 mt-1'">NitroGuy</h1>
        <h1 :class="mobileClass + ' opacity-[0.81] absolute bottom-0 right-0 mb-2 mt-1'">The Sass</h1>
        <!-- <p :class="mobileClass + ' opacity-[0.81] absolute bottom-0 left-0 mb-[16px] border-b border-l text-sm'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> -->
        <!-- <p :class="mobileClass + ' opacity-[0.81] absolute top-0 right-0 mb-2 mt-3 border-t border-r text-sm'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> -->
      </div>
    </NuxtLink>
    <div v-else id="NameHeader">
        <h1 :class="mobileClass + ' text-7xl font-bold text-center mb-2 mt-1'"><NuxtLink :to="href" class="no-underline">{{ props.name }}</NuxtLink></h1>
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

@media screen and (max-width: 390px)
{
  .nitroguy-the-sass-mobile
  {
    font-size: 18vw;
  }
  .nitroguy-the-sass-mobile-header
  {
    width: 95vw;
    height: 30vw;
  }
}

</style>
