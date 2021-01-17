import axios from 'axios'
const apiClient = axios.create({
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})
// "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + location + "&radius=" + radius + "&type=restaurant&keyword=" + keyword + "&key=" + api_key;
const api_key = "AIzaSyCl_IgI5fn2FVtiDm0xXCa_VlR_K-xctdc";
// temp data
var location = "-33.8670522,151.1957362";
var radius = "300";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
    GetPlacesByCuisineType(cuisine) {
        return apiClient.get(proxyurl+'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius='+radius+'&type=restaurant&keyword='+cuisine+'&key='+api_key)
    }
}
