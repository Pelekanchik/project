const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "");


const personalMoviedDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm1 = prompt("Останній з переглянутих фільмів це : ", "");
const rezFilm1 = prompt("На скільки його оцінете ? ", "");
const lastFilm2 = prompt("Останній з переглянутих фільмів це : ", "");
const rezFilm2 = prompt("На скільки його оцінете ? ", "");

personalMoviedDB.movies[lastFilm1] = rezFilm1;
personalMoviedDB.movies[lastFilm2] = rezFilm2;

console.log(personalMoviedDB);
