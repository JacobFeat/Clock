
// Setting a clock
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
  const today = new Date();
  const sec = today.getSeconds();
  const secDeg = sec*6+90;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  if(secDeg===90){
    secHand.classList.add("no-transition");
  }
  else{
    secHand.classList.remove("no-transition");
  }

  const min = today.getMinutes();
  const minDeg = min*6+90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  if(minDeg===90){
    minHand.classList.add("no-transition");
  }
  else{
    minHand.classList.remove("no-transition");
  }

  const hour = today.getHours();
  const hourDeg = hour*30+90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  if(hourDeg===90){
    hourHand.classList.add("no-transition");
  }
  else{
    hourHand.classList.remove("no-transition");
  }
}

setInterval(setDate, 1000);

// Showing minute on the screen
function sendDate(){
  const today = new Date();
  const showMin = document.querySelector(".show-untime");
  let currentHour = today.getHours();
  let currentMinute = today.getMinutes();
  let currentSecond = today.getSeconds();
  const currentTime = currentHour+":"+currentMinute+":"+currentSecond;


  if(currentSecond<2){
    document.querySelector(".unshow-time").classList.add("show-time");
    document.querySelector(".show-time").innerHTML = currentHour+":"+currentMinute+":0"+currentSecond;
  }
  else{
    document.querySelector(".unshow-time").classList.remove("show-time");
  }

}

setInterval(sendDate, 1000);

//for fun
document.querySelector("body").addEventListener("click", function(){
  document.querySelector(".before-test").classList.toggle("test");
});
