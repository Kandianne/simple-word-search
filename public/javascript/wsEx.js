

var cols = 10; 
var rows = 10; 
var html = ""; 

for(var i =0; i <= rows; i++) { 
	html += '<tr>'; 
	for(var h=0; h<= cols; h++) { 
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'; 
		var random = parseInt(Math.random()*characters.length);
       var letter = characters.charAt(random); //returning random letter
       html += '<td>' + letter + '</td>'; 
   } 
   html += '</tr>'; 
}

document.getElementById('wsBox').innerHTML += html;
console.log(document.getElementsByTagName('tr')[7].innerHTML);
console.log(document.getElementsByTagName('td')[7].innerHTML);

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


