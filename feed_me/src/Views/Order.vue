<template>
  <div class="header">
    <h1>Just sit back & relax, good food is closer than you think!</h1>
    <img src="../../public/order.svg" />
    <h3>What are you craving?</h3>
    <Dropdown
      :options="this.options"
      v-model="cuisine"
      label="Cuisine Type: "
    />
    <h3>How much do you want to spend?</h3>
    <div class="priceRange">
      <input type="radio" name="price" id="inexpensive" value="inexpensive" v-model="price"/>
      <label class="priceLabel" for="inexpensive">$</label>

      <input type="radio" name="price" id="moderate" value="moderate" v-model="price"/>
      <label class="priceLabel" for="moderate">$$</label>

      <input type="radio" name="price" id="expensive" value="expensive" v-model="price"/>
      <label class="priceLabel" for="expensive">$$$</label>

    </div>
    <h3>How far would you like to go?</h3>
    <div class="priceRange">
      <input type="number" v-model="radius" min="0" />
      <label class="priceLabel"> meters</label>
    </div>
    <button @click.prevent="goToOrderResults">Go!</button>
  </div>
</template>

<script>
import router from "../router";
import Dropdown from "../components/Dropdown.vue";
import { ref } from "vue";
export default {
  name: "Order",
  components: {
    Dropdown,
  },
  setup() {
    const cuisine = ref();
    const price = ref();
    const radius = ref();
    function goToOrderResults() {
      router.push({
        name: "OrderResult",
        params: { 
          cuisineType: cuisine.value, 
          priceRange: price.value, 
          distance: radius.value,
        },
      });
    }
    return {
      goToOrderResults,
      cuisine,
      price,
      radius,
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
  color: #2c3e50;
}

.cuisineLabel {
  font-size: 20px;
}

label + input {
  margin-left: 4%;
}

.priceLabel {
  font-size: 20px;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.button-container {
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  height: 20%;
}
button {
  margin-top: 2%;
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