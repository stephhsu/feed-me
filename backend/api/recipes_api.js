require('dotenv').config()

const { Pool } = require('pg')
const format = require('pg-format');

// put these in .env
const pool = new Pool({
    host: "35.192.174.106",
    database: "feed-me-db",
    user: "postgres",
    password: "vickytoria"
})
/*
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: 5432
})
*/

const getRecipeById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM recipes WHERE id = $1', [id], (err, res) => {
        if (err) {
            throw err
        }
        response.status(200).json(res.rows)
    })
}

const createRecipe = (request, response) => {
    const { data } = request.body

    const query_str = format(
        `INSERT INTO recipes (
            url, 
            name, 
            recipeID)
            VALUES %L`, data
    );

    pool.query(query_str, (err, res) => {
        if (err) {
            throw err
        }
        response.status(201).send(`Recipe uploaded succesfully`)
    })
}

module.exports = {
    getRecipeById,
    createRecipe
}
