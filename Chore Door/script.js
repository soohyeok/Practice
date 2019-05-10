var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');

let openDoor1, openDoor2, openDoor3;

var numClosedDoors = 3;
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');
let currentlyPlaying = true;

const randomChoreDoorGenerator = () =>{
  let choreDoor = Math.floor(numClosedDoors*Math.random());
  if(choreDoor == 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor == 1){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }
  else{
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}
const isClicked = (door) =>{
  return (door.src === closedDoorPath);
}
const playDoor = (door) =>{
  numClosedDoors -= 1;
  if(numClosedDoors === 0){
		gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
  }
}
const gameOver = (status) =>{
  if(status === 'win'){
   startButton.innerHTML = 'You win! Play again?'; 
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

const isBot = (door) => {
  if(door.src === botDoorPath){
   return true; 
  }
  else{
    return false;
  }
}


doorImage1.onclick = () => {
  if(currentlyPlaying && isClicked(doorImage1)){
    doorImage1.src = openDoor1;
  	playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if(currentlyPlaying && isClicked(doorImage2)){
    doorImage2.src = openDoor2;
  	playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if(currentlyPlaying && isClicked(doorImage3)){
    doorImage3.src = openDoor3;
  	playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if(currentlyPlaying === false){
   startRound(); 
  }
}

function startRound(){
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
}

randomChoreDoorGenerator();
