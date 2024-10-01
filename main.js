let number = document.querySelector('#num');
let decrease = document.querySelector('#decrease');
let increase = document.querySelector('#increase');
let reset = document.querySelector('#reset');

let count= 0 ;


// decrease btn 

decrease.addEventListener('click', function(){
    count--
    number.textContent = count
})

// reset 

reset.addEventListener('click', function(){
    count = 0 
    number.textContent = count
})

// increase

increase.addEventListener('click', function(){
    count++
    number.textContent = count
})