"use strict";
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("сколько фильмов вы уже смотрели ?", "");
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("сколько фильмов вы уже смотрели ?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("один из последних просмотренных фильмоа", ""),
      b = prompt("на сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonaLevel() {
  if (personalMovieDB.count < 10) {
    console.log("просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("вы класический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("вы киноман");
  } else {
    console.log("произошла ошибка");
  }
}
detectPersonaLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
  }

}
writeYourGenres();