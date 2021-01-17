import axios from 'axios'
const apiClient = axios.create({
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})
const key="5f573c0ff3014d258af894fe0988e44b"

export default {
    GetRecipesByCuisineType(cuisine) {
        return apiClient.get('https://api.spoonacular.com/recipes/complexSearch?cuisine='+cuisine.toLowerCase()+'&apiKey='+key)
    },

    GetRecipeData(ID) {
        console.log(ID)
        return apiClient.get("https://api.spoonacular.com/recipes/"+ID+"/information?includeNutrition=false&apiKey="+key)
    }
}
