const send = document.querySelector('.envoyer');
const end = document.querySelector('.end');
const start = document.querySelector('.start');
const recap = document.querySelector('.recap');
const form = document.querySelector('form');

const valeur1 = document.querySelector('#valeur1')
const valeur2 = document.querySelector('#valeur2')
const valeur3 = document.querySelector('#valeur3')
const valeur4 = document.querySelector('#valeur4')
const valeur5 = document.querySelector('#valeur5')

function value1(){
	recap.innerHTML = 'You Selected 1 of 5';
}
function value2(){
	recap.innerHTML = 'You Selected 2 of 5';
}
function value3(){
	recap.innerHTML = 'You Selected 3 of 5';
}
function value4(){
	recap.innerHTML = 'You Selected 4 of 5';
}
function value5(){
	recap.innerHTML = 'You Selected 5 of 5';
}

send.addEventListener('click',function(){
	end.style.display = 'block';
	start.style.display = 'none';

	if (valeur1.checked) {
		value1();
	}
	else if (valeur2.checked) {
		value2();
	}
	else if (valeur3.checked) {
		value3();
	}
	else if (valeur4.checked) {
		value4();
	}
	else if (valeur5.checked) {
		value5();
	}
	else{
		recap.innerHTML = "You did not selected any value"
	}
});
