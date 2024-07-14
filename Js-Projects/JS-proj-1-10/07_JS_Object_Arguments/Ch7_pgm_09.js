// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
console.log(message.substr(charIndex, 3));

console.log("\nFurther Adventures:");

var startIndex = message.indexOf("go");

console.log("1) Index where 'go' starts:", startIndex);

var startIndexOfChoose = message.indexOf("choose");
var chooseWord = message.substr(startIndexOfChoose, 6); 
console.log("2) Word 'choose':", chooseWord);

var lastIndex = message.lastIndexOf("oo");
console.log("3) Index of 'oo' in 'Moon':", lastIndex);




/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */