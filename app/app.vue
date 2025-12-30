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
