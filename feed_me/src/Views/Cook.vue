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
    /><br>
    <button @click.prevent="goToCookResults">Go!</button>
  </div>
</template>
<script>
import router from "../router";
import Dropdown from "../components/Dropdown.vue";
import { ref } from "vue";
export default {
  name: "HomePage",
  components: {
    Dropdown,
  },
  setup() {
    const cuisine = ref("");
    function goToCookResults() {
      console.log(cuisine.value)
      router.push({
        name: "CookResult",
        params: { cuisineType: cuisine.value },
      });
    }
    return {
      goToCookResults,
      cuisine,
    };
  },
  data() {
    return {
      options: [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern Europe",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
      ],
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Roboto+Slab&family=Source+Code+Pro&display=swap');
.header {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-family: 'Roboto Slab', serif;
}
h3 {
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
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
</style>
