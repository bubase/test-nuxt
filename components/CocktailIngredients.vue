<script setup lang="ts">
const cocktailStore = useCocktailStore()
const { ingredients } = storeToRefs(cocktailStore)
</script>

<template>
  <div>
    <h3>List of ingredients:</h3>
    <ul>
      <li v-for="{ measure, ingredient } in ingredients" :key="ingredient">
        {{ measure }} {{ ingredient }}
      </li>
    </ul>
  </div>
</template>