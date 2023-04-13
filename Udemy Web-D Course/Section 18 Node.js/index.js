// const fs =  require('fs') ;

// fs.copyFileSync("file1.txt", "file2.txt") ;

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random() ;
var mySuperVillainName = supervillains.random() ;

console.log("My super hero is " + mySuperHeroName) ;
console.log("My super villian is " + mySuperVillainName) ;
