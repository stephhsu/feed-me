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
    <ul>
      <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
        {{ ingredient.original }}
      </li>
    </ul>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Source+Code+Pro&display=swap');
.header {
  font-family: Avenir, Calibri, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h2 {
  font-family: 'Roboto Slab', serif;
  font-size: 180%;
  color: #2C3E50;
}

h4 {
  font-family: 'Roboto Slab', serif;
  font-size: 125%;
  color: #2C3E50;
}

ul {
  font-family: 'Roboto Slab', serif;
  list-style-type: circle;
  display: table;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 20px;
}

.img {
  border-radius: 25%;
  height: 30%;
  width: 50%;
}

a:link .back:link{
  font-family: 'Roboto Slab', serif;
  list-style-type: circle;
  color: rgb(42, 44, 44);
}
a:active {
  color: cadetblue;
}
a:hover {
  color: rgba(85, 223, 204, 0.76);
}

a:visited {
  color: #2C3E50;
}

.back {
  text-align: center;
  padding-bottom: 30px;
}
</style>
