<template>
  <div class="recipe-card">
    <router-link class="recipe-link" :to="{params: { id: recipe.id } }">
      <h4 class="recipe-title">{{recipe.title}}</h4>
      <img class="img" :src="imgUrl" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object
  },
  setup(props){
    const imgUrl = String(props.recipe.image);
    return {
      imgUrl
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Roboto+Slab&family=Source+Code+Pro&display=swap');
.recipe-card {
  margin-left: 25%;
  margin-right: 25%;
  padding: 17px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: #EBF5FB;
}
.recipe-title { 
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
  color: #2C3E50;
}

.recipe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.recipe-card > .recipe-title {
  margin: 0;
}

.recipe-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.img {
  border-radius: 60%;
  padding: 15px;
}
</style>
