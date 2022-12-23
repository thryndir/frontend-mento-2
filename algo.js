const rating1 = document.querySelector("#valeur1");
const rating2 = document.querySelector("#valeur2");
const rating3 = document.querySelector("#valeur3");
const rating4 = document.querySelector("#valeur4");
const rating5 = document.querySelector("#valeur5");
const ratings = rating1 + rating2 + rating3 + rating4 + rating5;


function changeColor(rating){
	
}


rating1.addEventListener("click",function(){
	click.currentTarget.style.backgroundColor = 'grey';
	rating2.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating3.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating4.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating5.style.backgroundColor = 'hsl(208, 12%, 21%)';
});

rating2.addEventListener("click",function(){
	rating2.style.backgroundColor = 'grey';
	rating1.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating3.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating4.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating5.style.backgroundColor = 'hsl(208, 12%, 21%)';
});

rating3.addEventListener("click",function(){
	rating3.style.backgroundColor = 'grey';
	rating1.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating2.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating4.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating5.style.backgroundColor = 'hsl(208, 12%, 21%)';
});

rating4.addEventListener("click",function(){
	rating4.style.backgroundColor = 'grey';
	rating1.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating2.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating3.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating5.style.backgroundColor = 'hsl(208, 12%, 21%)';
});

rating5.addEventListener("click",function(){
	rating5.style.backgroundColor = 'grey';
	rating1.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating2.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating3.style.backgroundColor = 'hsl(208, 12%, 21%)';
	rating4.style.backgroundColor = 'hsl(208, 12%, 21%)';
});
