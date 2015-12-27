

//==============CREATING GRID OF RANDOM LETTERS=======================================

var cols = 20; 
var rows = 10; 
var html = ""; 

for(var i = 0; i <= rows; i++) { 
	html += '<tr>'; 
	for(var h= 0; h <= cols; h++) { 
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'; 
		var random = parseInt(Math.random()*characters.length);
        var letter = characters.charAt(random); //returning random letter
        html += '<td class="randomLetters" onclick="showSubmit()">' + letter + '</td>'; 
    } 
    html += '</tr>'; 
}

document.getElementById('wsBox').innerHTML += html;
//==============REPLACING LETTERS ON GRID WITH ANSWERS=======================================

//cells are columns, rows are children.
var dtBoolean = 'BOOLEAN';
dtBoolean = dtBoolean.split('')
for(var i = 0; i <= dtBoolean.length - 1; i++){
	//DIAGONAL DIRECTION FROM TOP LEFT DOWN
	document.getElementById('wsBox').children[i].cells[i+3].outerHTML = 
	'<td class="answerLetter" onclick="showSubmit()">' + dtBoolean[i] + '</td>';
}


var dtString = 'STRING';
dtString = dtString.split('')
for(var i = 0; i <= dtString.length - 1; i++){
	//FROM TOP DOWN
	document.getElementById('wsBox').children[i+1].cells[i-i].outerHTML = 
	'<td class="answerLetter" onclick="showSubmit()">' + dtString[i] + '</td>';
}

var dtNumber = 'NUMBER';
dtNumber = dtNumber.split('')
for(var i = 0; i <= dtNumber.length - 1; i++){
	//FROM TOP DOWN AT ANY CELL
	document.getElementById('wsBox').children[i+1].cells[i + (17-i)].outerHTML = 
	'<td class="answerLetter" onclick="showSubmit()">' + dtNumber[i] + '</td>';
}

var dtObject = 'TCEJBO';
dtObject = dtObject.split('')
for(var i = 0; i <= dtObject.length - 1; i++){
	document.getElementById('wsBox').children[i+2].cells[i + (7-i)].outerHTML = 
	'<td class="answerLetter" onclick="showSubmit()">' + dtObject[i] + '</td>';
}

var dtNull = 'NULL';
dtNull = dtNull.split('')
for(var i = 0; i <= dtNull.length - 1; i++){
	document.getElementById('wsBox').children[(i-i)+9].cells[i].outerHTML = 
	'<td class="answerLetter" onclick="showSubmit()">' + dtNull[i] + '</td>';
}

var dtUndefined = 'DENIFEDNU';
dtUndefined = dtUndefined.split('')
for(var i = 0; i <= dtUndefined.length - 1; i++){
	document.getElementById('wsBox').children[i+1].cells[i + (11-i)].outerHTML = 
	'<td class="answerLetter" onclick="showSubmit()">' + dtUndefined[i] + '</td>';
}


//==============SUBMITTING ANSWERS=======================================
var addLettersAr = [];


function showSubmit() {
	document.getElementById('submitBut').innerHTML = '<button onclick="submitLetters()">SUBMIT LETTERS</button>';
	document.getElementById('clearBut').innerHTML = '<button onclick="clearLetters()">CLEAR LETTERS</button>';
	// var arrayOfAnswers = document.getElementsByClassName('answerLetter');
	// var arrayOfRandoms = document.getElementsByTagName('td');

	// console.log(addLettersAr);
	// function loopThruSubmission(){
	// 	console.log(document.getElementById('yourChoice'));
	// }
	submitLetters = function() {
		console.log(addLettersAr)
		var stringLetters = addLettersAr.join("");
		console.log(stringLetters);
	}	

	clearLetters = function() {
		addLettersAr = [];
		console.log(addLettersAr)
		document.getElementById('yourChoice').innerHTML = '';
	}
};

$('.randomLetters').each(function(index){
	$(this).click(function(){
		addLettersAr.push(this.innerHTML);
		var abc = document.getElementById('yourChoice').innerHTML +=this.innerHTML;
		console.log(abc);
	});
});

$('.answerLetter').each(function(index){
	$(this).click(function(){
		addLettersAr.push(this.innerHTML);
		var cab =  document.getElementById('yourChoice').innerHTML += this.innerHTML;
		console.log(cab + "test");
	});
});

// var firstCol = [];

// for (var i = 0; i <= 10; i++){
// 	var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
// 	var random = parseInt(Math.random()*characters.length);
// 	var letter = characters.charAt(random); //returning random letter
// 	var innerArrays = ['<td>' + letter + '</td>'];
// 	firstCol.push(innerArrays);
// };


// for (var i = 0; i <= 10; i++){
// 	document.getElementById('wsBox').innerHTML += '<tr>'+ firstCol[i] + '</tr>';
// };
