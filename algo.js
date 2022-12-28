const send = document.querySelector('.envoyer');
const end = document.querySelector('.end');
const start = document.querySelector('.start');
const recap = document.querySelector('.recap');
const form = document.querySelector('form');

send.addEventListener('click',function(){
	end.style.display = 'block';
	start.style.display = 'none';
	recap.innerHTML = 'You Selected ${value} of 5'
});