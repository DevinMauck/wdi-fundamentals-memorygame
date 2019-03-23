console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = ["card0", "cardOne", "cardTwo", "cardThree"];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	console.log("You found a match!");
 } else {
 	console.log("Sorry, try again.");
 }
 }
}


var flipCard = function(cardId) {
	cardId(0);
	cardId(2);
	
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
	
	

}





