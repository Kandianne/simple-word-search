// function draw(){
// 	var canvas = document.getElementById('drawHere')
// 	if(canvas.getContext){
// 		var ctx = canvas.getContext('2d');
// 		//illustration code goes here
// 	} else {
// 		console.log('not rendering');
// 	}
// }

(function createRowsThenLetterInside(){
	for (var i = 0; i <= 10; i++){
		document.getElementById('searchBox').innerHTML += '<tr class="randomLetters"></tr>';
		writeRandLettersInTable();
	};
})();

function writeRandLettersInTable(){
	//random characters are returned with this
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
	for (var i = 0; i <= 10; i++){
		var random = parseInt(Math.random()*characters.length);
		var letter = characters.charAt(random); //returning letter at the random index number that is generated from random number chosen between 1-27
		document.getElementsByClassName('randomLetters')[i].innerHTML += '<td>' + letter + '</td>';
	}
};








