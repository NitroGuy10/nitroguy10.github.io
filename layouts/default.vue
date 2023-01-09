<template>
  <div id="root">
    <Body class="bg-zinc-800 text-zinc-300" />
    <div id="page">
      <NameHeader name="NitroGuy" href="/" />
      <div id="content" class="mx-auto max-w-4xl text-2xl">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
p, h2 {
  margin-bottom: 1.25rem;
}
</style>
