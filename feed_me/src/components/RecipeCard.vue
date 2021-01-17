<template>
  <router-link class="recipe-link" :to="{params: { id: recipe.id } }">
    <div class="recipe-card">
      <h4 class="recipe-title">{{recipe.title}}</h4>
      <img src=recipe.image />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    recipe: Object
  }
}
</script>

<style scoped>
.recipe-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.recipe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.recipe-card > .recipe-title {
  margin: 0;
}
</style>
