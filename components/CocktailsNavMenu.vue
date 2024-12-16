<template>
  <div class="cocktails-nav">
    <CocktailsNavMenuOption v-for="{ code, id } in cocktailCodes" :key="id">
      <NuxtLink :to="{ name: 'cocktails-code', params: { code } }" :active-class="'cocktails-nav-link_active'"
        class="cocktails-nav-link">
        {{ code }}
      </NuxtLink>
    </CocktailsNavMenuOption>
  </div>
</template>

<style scoped>
.cocktails-nav {
  display: flex;
  flex-direction: column;
}

.cocktails-nav-link {
  text-decoration: none;
  display: inline-flex;
  width: 100%;
}

.cocktails-nav-link_active {
  color: red;
  font-weight: 600;
}
</style>
