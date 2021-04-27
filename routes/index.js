const express = require('express');
const Movie = require('../models/Movie.model.js');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    const movies = Movie.find()
    .then(movies =>{
        console.log(movies)
        res.render('movies', {movies})
    })
    .catch(err => console.log(err))
    
})
router.get('/moviesDetails/:movieid', (req, res, next) => {
    const {movieid} = req.params;
    Movie.findById(movieid)
    .then(movie => {
        
        res.render('moviesDetails', {movie})
    })
    .catch(err => console.log(err))
    
})

module.exports = router;