import axios from 'axios'
const apiClient = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/complexSearch?",
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    GetRecipesByCuisineType(cuisine) {
        return apiClient.get('cuisine='+cuisine+'&apiKey=5f50f4af0182474b8ac4bca604f3810f')
    }
}
