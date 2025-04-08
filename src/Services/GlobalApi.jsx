import React from 'react'
import axios from 'axios'
const movieBaseUrl = 'https://api.themoviedb.org/3'
const apiKey = '1f92980da738d51c668a2bcec752a082'
// const trending = 'https://api.themoviedb.org/3/trending/all/week?api_key=1f92980da738d51c668a2bcec752a082'
const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1f92980da738d51c668a2bcec752a082&with_genres='
const getTrendingVideoes = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + apiKey);
const getMovieByGenre = (genreId) => axios.get(movieByGenreBaseUrl + genreId + '&page=1')
export default{
    getTrendingVideoes,
    getMovieByGenre
}