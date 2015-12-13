
var firstCol = [];

for (var i = 0; i <= 10; i++){
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
	var random = parseInt(Math.random()*characters.length);
	var letter = characters.charAt(random); //returning random letter
	var innerArrays = ['<td>' + letter + '</td>'];
	firstCol.push(innerArrays);
};


for (var i = 0; i <= 10; i++){
	document.getElementById('wsBox').innerHTML += '<tr>'+ firstCol[i] + '</tr>';
};

