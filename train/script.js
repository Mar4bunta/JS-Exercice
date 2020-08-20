let nonTraction = 200;
let position = 0;
let animation;
let speed = 0;
let interTrain = setInterval(accelerer, nonTraction - speed);

let train = document.getElementById("train");
train.addEventListener("click",accelerer);

let btnStopper = document.getElementById("btnStopper");
btnStopper.addEventListener("click", stopperTrain)

function accelerer(){

	if(speed < 250){

		speed++;

	}

	function frame(){

		posActuelle = train.style.left;
		testerPosition(posActuelle);
		train.style.left = position++ + "px";

	}

	clearInterval(interTrain);
	interTrain = setInterval(accelerer, nonTraction - speed);
	frame();
}

function testerPosition(posActuelle){

	if(parseInt(posActuelle) + 100 > 360){

		clearInterval(interTrain);
		alert("Accident.")

	}
}

function stopperTrain(){

	clearInterval(interTrain);

}
//et mercé pour l'inspi Joel et Guillaume