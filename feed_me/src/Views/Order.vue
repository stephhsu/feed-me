<template>
  <div class="header">
    <h1>Just sit back & relax, good food is closer than you think!</h1>
    <img src="../../public/order.svg" />
    <h2>What are you craving?</h2>
    <label class="cuisineLabel" for="cuisine">Choose a cuisine type:</label>
    <select name="cuisine" id="cuisine">
      <option value="african">African</option>
      <option value="american">American</option>
      <option value="british">British</option>
      <option value="cajun">Cajun</option>
      <option value="caribbean">Caribbean</option>
      <option value="chinese">Chinese</option>
      <option value="eastern-european">Eastern European</option>
      <option value="european">European</option>
      <option value="french">French</option>
      <option value="german">German</option>
      <option value="greek">Greek</option>
      <option value="indian">Indian</option>
      <option value="irish">Irish</option>
      <option value="italian">Italian</option>
      <option value="japanese">Japanese</option>
      <option value="jewish">Jewish</option>
      <option value="korean">Korean</option>
      <option value="latin-american">Latin American</option>
      <option value="mediterranean">Mediterranean</option>
      <option value="mexican">Mexican</option>
      <option value="middle-eastern">Middle Eastern</option>
      <option value="nordic">Nordic</option>
      <option value="southern">Southern</option>
      <option value="spanish">Spanish</option>
      <option value="thai">Thai</option>
      <option value="vietnamese">Vietnamese</option>
    </select>

    <h2>How much do you want to spend?</h2>
    <div class="priceRange">
      <input type="radio" name="price" id="inexpensive" value="inexpensive"/>
      <label class="priceLabel" for="inexpensive">$</label>

      <input type="radio" name="price" id="moderate" value="moderate"/>
      <label class="priceLabel" for="moderate">$$</label>

      <input type="radio" name="price" id="expensive" value="expensive"/>
      <label class="priceLabel" for="expensive">$$$</label>

    </div>
    
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Order",
  setup() {
    function goToOrderResultsPage() {
      router.push({
        name: "OrderResult",
      });
    }
    
    return {
      goToOrderResultsPage
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

label + select {
  margin-left: 20px;
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

</style>