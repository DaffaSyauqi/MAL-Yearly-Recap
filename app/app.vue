<template>
  <div class="h-screen relative overflow-hidden">
    <uiIridescence
      :color="[0.5, 0.6, 0.7]"
      :speed="0.5"
      :amplitude="0.1"
      :mouseReact="false"
    />

    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
  ],
});
</script>
