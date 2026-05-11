'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", ""); 
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "");
    }
}
// start();


const personalMoviedDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for( let i = 0 ; i < 2 ; i++){
        const lastFilm = prompt("Останній з переглянутих фільмів це : ", "");
        const rezFilm = prompt("На скільки його оцінете ? ", "");
    
        if(lastFilm != null && rezFilm != null && lastFilm != '' && rezFilm != '' && lastFilm.length < 50 ){
            personalMoviedDB.movies[lastFilm] = rezFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMoviedDB.count < 10){
        console.log('Переглянуто досить мало фільмів');
    } else if(personalMoviedDB.count >= 10 && personalMoviedDB.count < 30){
        console.log('Ви класичний глядач');
    } else if(personalMoviedDB.count >= 30){
        console.log('Ви кіноман');
    } else {
        console.log('Виникла помилка');
    }
}

// detectPersonalLevel();
// ########################################################
function showMyDB(hiden){
    if(!hiden){
        console.log(personalMoviedDB);
    } 
}
showMyDB(personalMoviedDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3 ; i++){
        personalMoviedDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером :${i} `);
    }
}
writeYourGenres();