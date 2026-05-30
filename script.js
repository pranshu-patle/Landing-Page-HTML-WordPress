
// Live users random change

setInterval(() => {

let users = document.getElementById("liveUsers");

let current = parseInt(users.innerText);

let change = Math.floor(Math.random() * 5);

if(Math.random() > 0.5){
current += change;
}else{
current -= change;
}

if(current < 520) current = 540;

users.innerText = current;

},3000);


// Countdown timer

let countdown = document.getElementById("countdown");

let time = 3600; // 1 hour

setInterval(() => {

let hours = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);
let seconds = time % 60;

countdown.innerHTML =
String(hours).padStart(2,'0') + " : " +
String(minutes).padStart(2,'0') + " : " +
String(seconds).padStart(2,'0');

time--;

if(time < 0){
time = 3600;
}

},1000);
