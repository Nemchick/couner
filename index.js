let button = document.querySelector('.btn-counter');
let buttonReset = document.querySelector('.btn-counter-reset') ;
let counterText = document.querySelector('.counter');
let counter = 0;


button.addEventListener('click', function(){
    counter = counter + 1;

    counterText.innerText = counter;
});
buttonReset.addEventListener('click', function(){
    counter = 0;

    counterText.innerText = counter;
});