"use strict";
const numberOfFilms = +prompt("сколько фильмов вы уже смотрели ?","");
const personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt("один из последних просмотренных фильмоа",""),
      b = prompt("на сколько оцените его?",""),
      c = prompt("один из последних просмотренных фильмоа",""),
      d = prompt("на сколько оцените его?","");

      personalMovieDB.movies[a]=b;
      personalMovieDB.movies[c]=d;

      console.log(personalMovieDB);