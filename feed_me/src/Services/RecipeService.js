import axios from 'axios'
const apiClient = axios.create({
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})
const key="5f50f4af0182474b8ac4bca604f3810f"

export default {
    GetRecipesByCuisineType(cuisine) {
        return apiClient.get('https://api.spoonacular.com/recipes/complexSearch?cuisine='+cuisine.toLowerCase()+'&apiKey='+key)
    }
}
