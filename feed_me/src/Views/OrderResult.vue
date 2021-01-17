<template>
  <div class="header">
    <img src="../../public/cook.png" />
    <h2>We found some places you might like. Enjoy!</h2>
    {{ places }}
   <router-link to="/"> Back to Home </router-link>

  </div>
</template>
<script>
//import router from "../router";
import { ref } from "vue";
import PlacesService from "../Services/PlacesService.js";

export default {
  name: "OrderResult",
  components: {

  },
  props: {
    cuisineType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let places = ref([]);
    //const recipeService = new RecipeService(); //what we use to reference API
    PlacesService.GetPlacesByCuisineType(props.cuisineType)
      .then((resp) => {
        places.value = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      places,
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
