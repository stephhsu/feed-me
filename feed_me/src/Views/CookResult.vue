<template>
  <div class="header">
    <img src="../../public/cookdone.png" />
    <h2 class="cook-result-header">We got you some {{cuisineType}} recipes you might like. Enjoy!</h2>
    <RecipeCard @click.prevent="goToRecipe(recipe.id)" v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
   <router-link class="link" to="/"> Back to Home </router-link>
  </div>
</template>
<script>
import router from "../router";
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
    RecipeService.GetRecipesByCuisineType(props.cuisineType)
      .then((resp) => {
        recipes.value = resp.data.results;
      })
      .catch((err) => {
        console.log(err);
      });

    function goToRecipe(id) {
       router.push({
        name: "Recipe",
        params: { id: Number(id) },
      });
    }
    return {
      recipes,
      goToRecipe
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Roboto+Slab&family=Source+Code+Pro&display=swap');
.header {
  font-family: Avenir, Calibri, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cook-result-header {
  font-family: 'Roboto Slab', serif;
  font-size: 25px;
  color: #2C3E50;
  padding-bottom: 20px;
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
  font-size: 19px;
  font-family: 'Leckerli One', cursive;
  text-align: center;
  background-color: rgb(108, 244, 238);
  color: rgb(79, 79, 79);
  border-radius: 40px;
  border-color: white;
}

.link {
  font-family: 'Roboto Slab', serif;
  font-size: 15px;
  color: #2C3E50;
  padding-bottom: 30px;
}
</style>

