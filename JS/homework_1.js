/* eslint-disable no-unused-vars */
'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {}, 
  genres: [],
  privat: false
};


const lastWatchedFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
      lastWatchedFilmRatingFirst = prompt('На сколько оцените его?', ''),
      lastWatchedFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
      lastWatchedFilmRatingSecond = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedFilmFirst] = lastWatchedFilmRatingFirst;
personalMovieDB.movies[lastWatchedFilmSecond] = lastWatchedFilmRatingSecond;

console.log(personalMovieDB);
