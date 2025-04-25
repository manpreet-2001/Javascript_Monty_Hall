var doors = ["goat", "goat", "car"];
var playerChoice = -1;
var montyOpens = -1;

var temp = doors[0];
var randomIndex = Math.floor(Math.random() * 3);
doors[0] = doors[randomIndex];
doors[randomIndex] = temp;

var door0 = document.getElementById("door0");
var door1 = document.getElementById("door1");
var door2 = document.getElementById("door2");

door0.onclick = chooseDoor;
door1.onclick = chooseDoor;
door2.onclick = chooseDoor;

var stayButton = document.getElementById("stayButton");
var switchButton = document.getElementById("switchButton");

stayButton.onclick = stay;
switchButton.onclick = switchDoor;

function chooseDoor() {
  if (playerChoice === -1) {
    var id = this.id;
    playerChoice = parseInt(id.replace("door", ""));
    revealGoat();
  }
}

function revealGoat() {
  for (var i = 0; i < doors.length; i++) {
    if (i !== playerChoice && doors[i] === "goat") {
      montyOpens = i;
      break;
    }
  }

  var montyDoor = document.getElementById("door" + montyOpens);
  montyDoor.innerHTML = "🐐";

  document.getElementById("choiceButtons").style.display = "block";
  document.getElementById("message").innerHTML = "Do you want to stay or switch?";
}

function stay() {
  endGame(playerChoice);
}

function switchDoor() {
  var newChoice = -1;
  for (var i = 0; i < doors.length; i++) {
    if (i !== playerChoice && i !== montyOpens) {
      newChoice = i;
    }
  }
  playerChoice = newChoice;
  endGame(playerChoice);
}

function endGame(finalChoice) {
  for (var i = 0; i < doors.length; i++) {
    var door = document.getElementById("door" + i);
    if (doors[i] === "car") {
      door.innerHTML = "🚗";
    } else {
      door.innerHTML = "🐐";
    }
  }

  if (doors[finalChoice] === "car") {
    document.getElementById("message").innerHTML = "🎉 You won the CAR!";
  } else {
    document.getElementById("message").innerHTML = "🐐 You got a goat. Try again!";
  }

  document.getElementById("choiceButtons").style.display = "none";
}
