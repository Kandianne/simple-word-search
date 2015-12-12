function draw(){
	var canvas = document.getElementById('drawHere')
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		//illustration code goes here
	} else {
		console.log('not rendering');
	}
}

var wordSearch = (function(){
	//random characters are returned with this
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
	var random = parseInt(Math.random()*characters.length);
	console.log(random);
	console.log(characters.charAt(random));
	var letters = characters.charAt(random); //returning letter at the random index number that is generated from random number chosen between 1-27
	document.getElementById('ws').innerHTML = '<p>'+ letters +'</p>';
})();
