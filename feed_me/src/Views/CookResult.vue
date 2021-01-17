<template>
  <div class="header">
    <h1>Okay chef!</h1>
    <img src="../../public/cook.png" />
    <h2>Let's get you some recipes.</h2>
    <h3>Tell us what you're craving today:</h3>
    <Dropdown
      :options="this.options"
      v-model="cuisine"
      label="Cuisine Type: "
    />
    <button @click.prevent="goToCookResults">Go!</button>
  </div>
</template>
<script>
//import router from "../router";
import { ref } from "vue";
import RecipeService from "../Services/RecipeService.js";
export default {
  name: "HomePage",
  components: {
  },
  props: {
      cuisineType: {
          type: String,
          required: true
      }
  },
  setup(props) {
    let recipes =  ref([]);
    const recipeService = new RecipeService(); //what we use to reference API
    recipes.value = recipeService.GetRecipes(props.cuisineType);
    
    return {
        recipes
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
