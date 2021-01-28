/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

 	constructor (){
 		this.missed =0;
 		this.phrase = [new Phrase ('A match made in heaven'), 
 					   new Phrase ('Ahead of the game'),
 					   new Phrase ('A dime a dozen'),
 					   new Phrase ('A Piece of cake'),
						new Phrase ('Beating around the bush'),
						new Phrase ('A chip on your shoulder'),
						new Phrase ('An arm and a leg'),
						new Phrase ('Paint the town red'),
						new Phrase ('Let bygones be Bygones'),
						new Phrase ('Take it with a grain of salt')
						];
		 this.activePhrase = null;
		 
 	}

 	getRandomPhrase(){
 		let index = Math.floor(Math.random() * this.phrase.length);
 		return this.phrase[index];
	 }
	 
	 startGame(){
		 this.resetGame();
		 document.getElementById('overlay').style.display ='none';
		 this.activePhrase = this.getRandomPhrase();
		 this.activePhrase.addPhraseToDisplay();
	  
	 }

	 handleInteraction(key){
		 key.disabled = true;
		if(this.activePhrase.checkLetter(key.textContent) === true){
			this.activePhrase.showMatchedLetter(key.textContent);
			key.classList.add('chosen');
			
		}
		if(this.activePhrase.checkLetter(key.textContent) !== true){
			this.removeLife();
			key.classList.add('wrong');
		}
		
		this.checkForWin();
		
	 }

	 checkForWin(){
		let letters = document.querySelectorAll('.letter'); // get all the letters 		
		
		let every = Array.from(letters).filter(letter => letter.classList.contains('show')); // check if every element in the array has a class 'show'
		// if the letters length is equal to length of array with show class, then all elements have been revealed
		if(every.length ===  letters.length){
			this.gameOver(true);
		}
			// if the letters length is equal to length of array with show class, then all elements have been revealed
	 }

	 removeLife(){
		const hearts = document.querySelectorAll('.tries img');
		hearts[this.missed].src= 'images/lostHeart.png';
		this.missed ++;
		this.gameOver();
	 }

	 gameOver(value = false){
		
		 let message = document.getElementById('game-over-message');
		if(this.missed === 5){
			message.textContent = "Sorry, you lose, better luck next time";
			document.getElementById('overlay').style.display ='block';
			document.getElementById('overlay').style.backgroundColor = 'red';
			
			
			
		}
		if(value === true){
			message.textContent = " You win, way to go";
			document.getElementById('overlay').style.display ='block';
			document.getElementById('overlay').style.backgroundColor = 'green';
			
			
		}
	 }
	  
	 resetGame(){
		for(const key of keys){
			key.classList.remove('wrong');
			key.classList.remove('chosen');
			key.disabled=false;
		}
		const hearts = document.querySelectorAll('.tries img');
		for(let i=0; i< hearts.length; i++){
			hearts[i].src= 'images/liveHeart.png';
		}
		document.getElementById('phrase').firstElementChild.innerHTML='';
	 }

 }