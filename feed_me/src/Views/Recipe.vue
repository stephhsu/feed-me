<template>
  <div class="header">
    <h2>{{ recipe.title }}</h2>
  </div>
  <div>
    <img class="img" :src="recipe.image" />
    <h4>Servings: {{ recipe.servings }}</h4>
    <h4>Cooking Time: {{ recipe.readyInMinutes }}</h4>
    <a :href="recipe.sourceUrl">Check out the original source here!</a>
    <h4>Ingredients Needed</h4>
    <ol>
      <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
        {{ ingredient.original }}
      </li>
    </ol>
    <span class="back">
      <router-link to="/"> Back to Home </router-link>
    </span>
  </div>
</template>

<script>
import RecipeService from "../Services/RecipeService.js";
import { ref } from "vue";
export default {
  name: "Recipe",
  props: {
    id: {
      required: true,
    },
  },
  setup(props) {
    let recipe = ref({});
    RecipeService.GetRecipeData(props.id).then((resp) => {
      recipe.value = resp.data;
    });

    return {
      recipe,
    };
  },
};
</script>
<style>
.header {
  font-family: Avenir, Calibri, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li{
    text-align: left;
}
.img {
  border-radius: 25%;
  height: 30%;
  width: 50%;
}
.back {
  display: flex;
  text-align: center;
}
a:link {
  color: rgb(42, 44, 44);
}
a:active {
  color: cadetblue;
}
a:hover {
  color: rgba(85, 223, 204, 0.76);
}
</style>
