//array declaration

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

alert('tablica po dodaniu imion: ' + allNames);

//new variable declaration

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	var newNameAdded = allNames.push(newName);
}
else {
	alert('upsss, cos poszlo nie tak :(');
}

console.log(allNames);
alert('tablica po dodaniu Marian: ' + allNames);