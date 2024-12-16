<template>
  <div class="cocktails">
    <CocktailsNavMenu />
    <NuxtPage />
  </div>
</template>

<style scoped>
.cocktails {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
}

@media (max-width: 600px) {
  .cocktails {
    grid-template-columns: 1fr;
  }
}
</style>