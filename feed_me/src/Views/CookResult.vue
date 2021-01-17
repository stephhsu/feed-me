<template>
  <div class="header">
    <img src="../../public/cookdone.png" />
    <h2>We got you some recipes you might like. Enjoy!</h2>
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
   <router-link to="/"> Back to Home </router-link>
  </div>
</template>
<script>
//import router from "../router";
import { ref } from "vue";
import RecipeService from "../Services/RecipeService.js";
import RecipeCard from "../components/RecipeCard.vue";
export default {
  name: "HomePage",
  components: {
    RecipeCard
  },
  props: {
    cuisineType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let recipes = ref([]);
    //const recipeService = new RecipeService(); //what we use to reference API
    RecipeService.GetRecipesByCuisineType(props.cuisineType)
      .then((resp) => {
        recipes.value = resp.data.results;
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      recipes,
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
.button-container {
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  height: 20%;
}
button {
  width: 25%;
  height: 200%;
  font-size: 100%;
  font-family: Arial;
  text-align: center;
  background-color: rgb(108, 244, 238);
  text-color: rgb(79, 79, 79);
  border-radius: 60px;
  border-color: white;
}
</style>

