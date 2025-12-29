<template>
  <div class="relative p-0 h-screen overflow-hidden">
    <uiIridescence
      :color="[0.5, 0.6, 0.7]"
      :speed="0.5"
      :amplitude="0.1"
      :mouseReact="false"
    />
    <uiHeroContent />
  </div>
</template>

<script setup lang="ts"></script>
