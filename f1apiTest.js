// simple script to call f1api.js and print out the results
import F1ApiClient from './f1api.js';

console.log('here')
let client = new F1ApiClient();
// let seasons = await client.getSeasons();
// console.log(seasons);
let currentSeason = await client.getSeason(2023)
console.log(currentSeason)
