/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

 	constructor (){
 		this.missed =0;
 		this.phrase = [new Phrase ('A match made in heaven'), 
 					   new Phrase ('Ahead of the game'),
 					   new Phrase (	'Aint That A Shame'),
 					   new Phrase ('All Fun And Games Until Somebody Loses An Eye'),
 					   new Phrase ( 'All your base are belong to us')];
		 this.activePhrase = null;
		 
 	}

 	getRandomPhrase(){
 		let index = Math.floor(Math.random() * this.phrase.length);
 		return this.phrase[index];
	 }
	 
	 startGame(){
		 document.getElementById('overlay').style.display ='none';
		 this.activePhrase = this.getRandomPhrase();
		 this.activePhrase.addPhraseToDisplay();
	  
	 }

	 handleInteraction(e){
	
		this.activePhrase.checkLetter(e);
	 }
 }