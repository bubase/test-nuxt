<script setup lang="ts">
import type { CocktailCode } from '@/types/cocktails';

const IMAGE_MAX_WIDTH = '350px'
const IMAGE_MAX_HEIGHT = '350px'

const props = defineProps<{
  name: CocktailCode
}>()

const cocktailStore = useCocktailStore()
const { cocktailData } = storeToRefs(cocktailStore)
const { error } = await useAsyncData('cocktail', () => cocktailStore.fetchCocktail(props.name))
</script>

<template>
  <div class="cocktail-info-wrapper">
    <!-- <div v-if="status === 'pending'">Loading...</div> -->
    <div v-if="error">Error: {{ error }}</div>
    <div v-else-if="cocktailData" class="cocktail-info">
      <div>
        <CocktailMainInfo />
        <CocktailInstructions />
        <CocktailIngredients />
      </div>
      <CocktailImage class="cocktail-image" />
    </div>
  </div>

</template>

<style scoped>
.cocktail-info-wrapper {
  container-type: inline-size;
}

.cocktail-info {

  display: grid;
  grid-template-columns: minmax(50%, 1fr) minmax(auto, v-bind(IMAGE_MAX_WIDTH));
  gap: 2rem;
}

.cocktail-image {
  max-width: v-bind(IMAGE_MAX_WIDTH);
  max-height: v-bind(IMAGE_MAX_HEIGHT);
}

@container (max-width: 600px) {
  .cocktail-info {
    grid-template-columns: 1fr;
  }

  .cocktail-image {
    order: -1;
    height: calc(100vw - (var(--app-padding) * 2));
  }
}
</style>