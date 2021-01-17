<template>
  <div class="background-panel">
    <div class="header">
      <h1>Welcome to</h1>
      <img src="../../public/logo.png" />
      <h2>You're hungry!</h2>
      <h3>Let's fix that.</h3>

      <h3>Tell us what you're in the mood for:</h3>
      <div class="button-container">
        <span>
          <button @click.prevent="goToCookPage">LET'S COOK</button>
        </span>
        <span>
          <button @click.prevent="goToOrderPage">I'LL ORDER</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "HomePage",
  components: {
  },
  setup() {
    function goToCookPage() {
      router.push({
        name: "Cook",
      });
    }

    function goToOrderPage() {
      router.push({
        name: "Order",
      });
    }
    
    return {
      goToCookPage,
      goToOrderPage,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Roboto+Slab&family=Source+Code+Pro&display=swap');
body {
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%; /* 100% of the viewport height */
  margin: 0;
}
.header {
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
  font-size: 19px;
  font-family: 'Leckerli One', cursive;
  text-align: center;
  background-color: rgb(108, 244, 238);
  color: rgb(79, 79, 79);
  border-radius: 40px;
  border-color: white;
}
</style>
