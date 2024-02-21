// counter funtionality

const  decrease = document.getElementById("decrease");
const  reset = document.getElementById("reset");
const  increase = document.getElementById("increase");
const  countDisplay = document.getElementById("count-display");
let count = 0;


increase.onclick = function(){
  count++;
  countDisplay.textContent = count;
}

reset.onclick = function(){
  count=0;
  countDisplay.textContent = count;
}

decrease.onclick = function(){
  count--;
  countDisplay.textContent = count;
}