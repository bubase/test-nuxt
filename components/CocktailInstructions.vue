<script setup lang="ts">
const cocktailStore = useCocktailStore()
const { instructions } = storeToRefs(cocktailStore)
</script>

<template>
  <div>
    <div>
      <h3>Instructions:</h3>
      <p>
        {{ instructions }}
      </p>
    </div>
  </div>
</template>