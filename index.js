// DISPLAY SUPPORT ----------------------------------------------------------------
let currentResultText = "";
document.querySelector(".display").innerHTML = currentResultText;

let display = document.querySelector(".display");

addTextToDisplay(".add");
addTextToDisplay(".minus");
addTextToDisplay(".multiply");
addTextToDisplay(".divide");
addTextToDisplay(".zero");
addTextToDisplay(".one");
addTextToDisplay(".two");
addTextToDisplay(".three");
addTextToDisplay(".four");
addTextToDisplay(".five");
addTextToDisplay(".six");
addTextToDisplay(".seven");
addTextToDisplay(".eight");
addTextToDisplay(".nine");
addTextToDisplay(".dot");


document.querySelector(".clear").addEventListener("click", function() {
  display.innerHTML = "";
  currentAmount = "";
  currentNumbers = "";
  parseInt(currentNumbers, 10);
  parseInt(currentAmount, 10);
});

document.querySelector(".delete").addEventListener("click", function() {
  display.innerHTML = display.innerHTML.slice(0, -1);
});

function addTextToDisplay(ids) {
  document.querySelector(ids).addEventListener("click", function() {
    let textContent = document.querySelector(ids).textContent;
    let addingText = document.createTextNode("" + textContent);
    display.appendChild(addingText);
  })
};

// CALCULATOR OPERATIONS ----------------------------------------------------------
function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function minus(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiple(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

function calculator(operation, num1, num2) {
  return operation(num1, num2);
}



// MECHANISM SUPPORT --------------------------------------------------------------
let currentResult = 0;
let currentNumbers = "";
let currentAmount = "";

parseInt(currentAmount, 10);
parseInt(currentNumbers, 10);


let one = document.querySelector(".one").textContent;
document.querySelector(".one").addEventListener("click", function() {
  currentNumbers = currentNumbers + one;
});

let two = document.querySelector(".two").textContent;
document.querySelector(".two").addEventListener("click", function() {
  currentNumbers = currentNumbers + two;
});

let four = document.querySelector(".four").textContent;
document.querySelector(".four").addEventListener("click", function() {
  currentAmount = currentAmount + four;
});

let five = document.querySelector(".five").textContent;
document.querySelector(".five").addEventListener("click", function() {
  currentAmount = currentAmount + five;
});


// document.querySelector(".add").addEventListener("click", function(){
//   currentResult = Number(currentAmount) + Number(currentNumbers);
//   document.querySelector(".result").addEventListener("click", function(){
//     currentResult = Number(currentAmount) + Number(currentNumbers);
//   })
// })

function adding(num1, num2) {
  document.querySelector(".add").addEventListener("click", function() {
    currentResult = Number(document.querySelector(num1).textContent) + Number(document.querySelector(num2).textContent);
    document.querySelector(".result").addEventListener("click", function() {
      currentResult = Number(currentAmount) + Number(currentNumbers);
    })
  })
}

adding("")
