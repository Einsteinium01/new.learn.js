const decrease = document.getElementById("decBtn");
const increase = document.getElementById("incBtn");
const reset = document.getElementById("reset");
const label = document.getElementById("countLabel");

let count = 0;

decrease.onclick = function(){
    count--;
    label.textContent = count;
}

increase.onclick = function(){
    count++;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}
