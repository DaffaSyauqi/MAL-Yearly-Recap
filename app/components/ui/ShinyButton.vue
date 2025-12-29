<template>
  <div class="shiny-button">
    <ShinyText
      text="Github"
      :disabled="false"
      :speed="3"
      class-name="shiny-text-demo"
    />
  </div>
</template>

<style scope>
.shiny-button {
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.shiny-button:hover {
  transform: translateY(-2px);
}
.shiny-text-demo {
  font-weight: 600;
}
</style>
