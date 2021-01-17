<template>
  <div class="header">
    <img src="../../public/cook.png" />
    <h2>We found some places you might like. Enjoy!</h2>
    <div class="map-container">
        <Maps 
            enteredAddress=""
        />
    </div>
    {{ places }}
   <router-link to="/"> Back to Home </router-link>

  </div>
</template>
<script>
//import router from "../router";
import { ref } from "vue";
import PlacesService from "../Services/PlacesService.js";
import Maps from "../maps/Maps.vue";

export default {
  name: "OrderResult",
  components: {
      Maps
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
    let places = ref([]);
    
    PlacesService.GetPlacesByCuisineType(props.cuisineType, props.priceRange, props.distance)
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
.map-container {
    position: relative;
    left: 25%;
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
