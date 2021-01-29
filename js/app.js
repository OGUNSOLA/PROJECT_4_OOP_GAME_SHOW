/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
// const phrase = new Phrase('Life is like a box of chocolates');


const start = document.getElementById('btn__reset');
let game;
const keysDiv = document.getElementById('qwerty');
const keys = document.querySelectorAll('.key')
const letters = document.querySelectorAll('.letter');


start.animate([{
    fontSize: '20px'
},
{
    fontSize: '25px'
}
],1000);

start.addEventListener("click", function() {
//game.getRandomPhrase().addPhraseToDisplay();
game = new Game();
game.startGame();
});

keys.forEach(key =>{
    key.addEventListener('click', function(){
         game.handleInteraction(key);
    });
  
});





addEventListener('keyup', (e)=> {
    for(const key of keys) {
       if(e.key === key.textContent){
        game.handleInteraction(key);
       }
    }
});
