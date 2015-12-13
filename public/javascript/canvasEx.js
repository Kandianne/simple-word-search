
// (function createRowsThenLetterInside(){
// 	for (var i = 0; i <= 10; i++){
// 		document.getElementById('searchBox').innerHTML += '<tr class="randomLetters"></tr>';
// 		// var rowsWithClasses = document.getElementsByClassName('randomLetters')[i].contains(classesWithAnswers);
// 		// var classesWithAnswers = document.getElementsByClassName('letterToAnswer')[i].innerHTML;
// 		// console.log(typeof (document.getElementsByClassName('letterToAnswer')[i].innerHTML));
// 		// console.log(typeof (document.getElementsByClassName('randomLetters')[i].innerHTML));
// 		// console.log(document.getElementsByClassName('letterToAnswer')[i].innerHTML);
// 		// if(rowsWithClasses == 'letterToAnswer'){
// 		// 	// for (var i = 0; i <= 10; i++){
// 		// 		console.log('do nothing')
// 		// 	// }
// 		// } else {
// 		// 	writeRandLettersInTable();
// 		// }
// 	};
// 	// for (var i = 0; i <= 9; i++) {
// 	// 	writeRandLettersInTable();
// 	// };
// })();


// function writeRandLettersInTable(){
// 	//random characters are returned with this
// 	var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
// 	for (var i = 0; i <= 6; i++){
// 		var random = parseInt(Math.random()*characters.length);
// 		var letter = characters.charAt(random); //returning letter at the random index number that is generated from random number chosen between 1-27
// 		document.getElementsByClassName('randomLetters')[i].innerHTML += '<td>' + letter + '</td>';
// 	}
// };


// (function writeString(){
// 	var dtString = ["S", "T", "R", "I", "N", "G"];
// 	for (var i = 0; i <= dtString.length -1; i++){
// 		document.getElementsByClassName('randomLetters')[i].innerHTML += '<td>' + dtString[i] + '</td>';
// 	}
// })();

// (function writeBoolean(){
// 	var dtString = ["B", "O", "O", "L", "E", "A", "N"];
// 	for (var i = 0; i <= dtString.length -1; i++){
// 		document.getElementsByClassName('randomLetters')[0].innerHTML += '<tr class="randomLetters"><td>'+ dtString[i] + '</td></tr>';
// 	}
// })();

// (function writeNumber(){
// 	var dtString = ["U", "M", "B", "E", "R"];
// 	for (var i = 0; i <= dtString.length -1; i++){
// 		document.getElementsByClassName('randomLetters')[4].innerHTML += '<td>' + dtString[i] + '</td>';
// 	}
// })();

// (function writeNull(){
// 	var dtString = ["N", "U", "L", "L"];
// 	for (var i = 0; i <= dtString.length -1; i++){
// 		document.getElementsByClassName('randomLetters')[6].innerHTML += '<td>' + dtString[i] + '</td>';
// 	}
// })();


// (function writeUndefined(){
// 	var dtString = ["U", "N", "D", "E", "F", "I", "N", "E","D"];
// 	for (var i = 0; i <= dtString.length -1; i++){
// 		document.getElementById('searchBox').innerHTML += '<tr class="randomLetters">'+ dtString[i] + '</tr>';
// 	}
// })();

// (function writeObject(){
// 	var dtString = ["O", "B", "J", "E", "C", "T"];
// 	for (var i = 0; i <= dtString.length -1; i++){
// 		document.getElementsByClassName('randomLetters')[7].innerHTML += '<td>' + dtString[i] + '</td>';
// 	}
// })();



// function draw(){
// 	var canvas = document.getElementById('drawHere')
// 	if(canvas.getContext){
// 		var ctx = canvas.getContext('2d');
// 		//illustration code goes here
// 	} else {
// 		console.log('not rendering');
// 	}
// }








