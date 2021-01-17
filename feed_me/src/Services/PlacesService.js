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
var distance;
var priceMin = 0;
var priceMax = 3;

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
    GetPlacesByCuisineType(cuisine, price, radius) {
        if (price == "inexpensive") {
            priceMax = 1;
        }
        else if (price == "moderate") {
            priceMin = 1;
            priceMax = 2;
        } else if (price == "expensive") {
            priceMin = 2;
            priceMax = 3;
        }
        console.log(radius);
        if(radius === undefined || radius == "undefined") {
            distance = 1000;
        } else {
            distance = radius;
        }
        return apiClient.get(proxyurl+'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&minprice='+priceMin+'&maxprice='+priceMax+'&radius='+distance+'&type=restaurant&keyword='+cuisine+'&key='+api_key)
    }
}
