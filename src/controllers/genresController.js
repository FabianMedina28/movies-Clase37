const db = require('../database/models/index.js');
const path = require('path');

const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
        .then(function(genres){
            res.render('genresList', {genres})
        })
    },
    detail:(req,res) =>{
        db.Genre.findByPk(req.params.id)
        .then(function(genre){
            res.render('genresDetail', {genre})
        })
    }
}
module.exports = genresController