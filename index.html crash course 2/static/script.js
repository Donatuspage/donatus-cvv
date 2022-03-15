// Challenge 1: Your Age in Days

function ageIndays() {
    var birthYear = prompt('what year were you born....Good friend?');
    var ageInDays = (2018-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(' you are ' + ageInDays + ' days')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
// challenge 2: Cat generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}