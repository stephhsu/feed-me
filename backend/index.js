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
