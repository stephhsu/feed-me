<template>
  <div class="header">
    <img src="../../public/cook.png" />
    <h2>We found some {{cuisineType}} places you might like. Enjoy!</h2>
    <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
   <router-link class="link" to="/"> Back to Home </router-link>

  </div>
</template>
<script>
//import router from "../router";
import { ref } from "vue";
import PlacesService from "../Services/PlacesService.js";
import RestaurantCard from "../components/RestaurantCard.vue";

export default {
  name: "OrderResult",
  components: {
      RestaurantCard
  },
  props: {
    cuisineType: {
        type: String,
        required: true,
    },
    priceRange: {
        type: String, 
        required: false,
    },
    distance: {
        type: Number,
        required: false,
    },
  },
  setup(props) {
    let restaurants = ref([]);
    
    PlacesService.GetPlacesByCuisineType(props.cuisineType, props.priceRange, props.distance)
      .then((resp) => {
        restaurants.value = resp.data.results;
        console.log(JSON.stringify(restaurants.value));
        //console.log(JSON.stringify(places.value));
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      restaurants,
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

.link {
  font-family: 'Roboto Slab', serif;
  font-size: 15px;
  color: #2C3E50;
  padding-bottom: 30px;
}
</style>

