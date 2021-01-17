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
