<template>
  <div id="root">
    <Body class="bg-zinc-900 text-zinc-300 overflow-y-scroll" /> <!-- bg-zinc-800 -->
    <div id="page">
      <NameHeader name="NitroGuy" href="/" />
      <div id="content" class="mx-auto p-4 max-w-4xl text-xl font-geist">
        <slot />
        <br class="mt-10">
      </div>
    </div>
  </div>
</template>

<style>
p, h2, ul, ol {
  margin-bottom: 1.25rem;
}
</style>
