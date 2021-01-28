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
				phraseLi.innerHTML = letter
			}
			phraseUL.appendChild(phraseLi);
		 }
 		
	 }

	 
	 checkLetter(key){
		return this.phrase.includes(key);
	 
	 }

	 showMatchedLetter(key){
		const letters = document.querySelectorAll('.letter');

		for(const letter of letters)
		{
			if(letter.innerText === key){
				letter.classList.remove('hide');
				letter.classList.add('show');
			}	
		}
		
	 }	

	
 }

 