<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.code === 'string' && getIsCocktailCode(route.params.code)
  }
})
</script>

<template>
  <CocktailInfo v-if="typeof $route.params.code === 'string' && getIsCocktailCode($route.params.code)"
    :name="$route.params.code" />
</template>