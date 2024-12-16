<script setup lang="ts">
const cocktailStore = useCocktailStore()
const { imageSrc } = storeToRefs(cocktailStore)
</script>

<template>
  <div>
    <NuxtImg :src="imageSrc" alt="Cocktail image" class="cocktail-image" loading="lazy" />
  </div>
</template>

<style scoped>
.cocktail-image {
  width: 100%;
  object-fit: contain;
}
</style>