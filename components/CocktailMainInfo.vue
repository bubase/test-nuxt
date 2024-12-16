<script setup lang="ts">
const cocktailStore = useCocktailStore()
const { mainInfo } = storeToRefs(cocktailStore)
</script>

<template>
  <div v-if="mainInfo">
    <h2 class="title">{{ mainInfo.name }}</h2>
    <ul>
      <li>{{ mainInfo.category }}</li>
      <li> {{ mainInfo.alcoholic }}</li>
      <li> {{ mainInfo.glass }}</li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  margin-top: 0;
}
</style>