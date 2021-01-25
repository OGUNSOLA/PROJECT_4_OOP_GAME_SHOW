/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
 	constructor(phrase){
 		this.phrase = phrase.toLowerCase();
 	}

 	addPhraseToDisplay(phrase){
		 const phraseUL = document.getElementById('phrase').firstElementChild;
		 for(const letter of this.phrase){
			const phraseLi = document.createElement('li');
			phraseLi.classList.add('hide');

			if(letter === ' '){
				phraseLi.classList.add('space');
			}
			else {
				phraseLi.classList.add('letter');
				phraseLi.classList.add(letter);
				phraseLi.classList.add(letter);
				phraseLi.classList.add(letter);
				phraseLi.innerHTML = letter
			}
			phraseUL.appendChild(phraseLi);
		 }
 		
	 }
	 
	 checkLetter(e){

		 
		 for(let i=0; i< game.activePhrase.phrase.length; i++){
			 
			 if(game.activePhrase.phrase[i] == e.target.innerHTML){
				foundIndices.push[i];
				console.log(`${e.target.innerHTML} at ${i}`);
			 }
		 }
		 console.log(foundIndices);
		 
	 }
 }