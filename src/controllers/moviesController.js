const db = require('../database/models/index.js');
const path = require('path');

const moviesController ={
    list:(req, res) => {
        db.Movie.findAll()
        .then(function(movies){
            res.render('moviesList', {movies})
        })
    },
    detail:(req,res) =>{
        db.Movie.findByPk(req.params.id)
        .then(function(movie){
            res.render('moviesDetail', {movie})
        })
    },
    new: (req, res) => {
        db.Movie.findAll({ order: [['createdAt', 'DESC']] }) 
        .then(function(movies){
            res.render('newestMovies', { movies });
        })
    },
    recomended: (req, res) => {
        db.Movie.findAll({ order: [['rating', 'DESC']], limit:5 }) 
        .then(function(movies){
            res.render('recommendedMovies', { movies });
        })
    }, 
}
module.exports = moviesController