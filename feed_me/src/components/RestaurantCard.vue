<template>
  <div class="restaurant-card">
    <h4 class="restaurant-title">{{restaurant.name}}</h4>
    <h4 class="restaurant-hours">{{openNow}}</h4>
    <h4 class="restaurant-rating">Ratings: {{restaurant.rating}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: Object
  },
  setup(props){
    let openNow = "Closed"
    if(props.restaurant.opening_hours.open_now == true) {
      openNow = "Open now"
    }
    return {
      openNow
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Roboto+Slab&family=Source+Code+Pro&display=swap');
.restaurant-card {
  margin-left: 25%;
  margin-right: 25%;
  padding: 17px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: #EBF5FB;
}
.restaurant-title { 
  font-family: 'Leckerli One', cursive;
  font-size: 30px;
  color: #2C3E50;
}

.recipe-card > .recipe-title {
  margin: 0;
}
</style>

