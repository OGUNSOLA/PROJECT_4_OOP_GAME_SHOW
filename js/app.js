/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
// const phrase = new Phrase('Life is like a box of chocolates');


const start = document.getElementById('btn__reset');
let game;
const keys = document.getElementById('qwerty');
const foundIndices =[];

start.addEventListener("click", function() {
//game.getRandomPhrase().addPhraseToDisplay();
game = new Game();
game.startGame();
});

keys.addEventListener('click', function (e){
    game.handleInteraction(e);
});