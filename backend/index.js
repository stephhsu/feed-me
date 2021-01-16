const express = require('express');
const bodyParser = require('body-parser')
const app = express();
  
const recipe_db = require('./api/recipes_api')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.send('Express set up');
});

app.get('/recipes/:id', recipe_db.getRecipeById)
app.post('/recipes', recipe_db.createRecipe)

var api_key = "AIzaSyCl_IgI5fn2FVtiDm0xXCa_VlR_K-xctdc";
var location = "-33.8670522,151.1957362";
var radius = "300";
var keyword = "indian"; // basically type of cuisine

var maps_endpoint = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" 
    + location + "&radius=" + radius + 
    "&type=restaurant&keyword=" + keyword + "&key=" + api_key;

var request = require("request");

request.get(maps_endpoint, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
})

app.listen(3000, () => {
    console.log(`listening on 3000`);
});

/*
var request = require('request');

var url = "https://api.spoonacular.com/recipes/complexSearch";
var query = "?query=pasta&maxFat=25&number=2";

app.get('', function(req, res) {
    re
})
*/
