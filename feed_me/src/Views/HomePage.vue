<template>
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
        <button @click.prevent="goToOrderPage">I'll ORDER</button>
      </span>
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
  width: 50%;
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
