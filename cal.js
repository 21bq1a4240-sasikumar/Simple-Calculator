let input = document.querySelector('input');            // select input field
let numberButtons = document.querySelectorAll('.numbers'); // select all number buttons
let operatorButtons=document.querySelectorAll('.operators');
let acButton=document.querySelector('.ac');
let delButton=document.querySelector('.del');
let euqalButton=document.querySelector('.equals');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent; // append the button's text to input
    });
});
operatorButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        input.value+=button.textContent;
    });
});
acButton.addEventListener('click',()=>{
    input.value="";
});
delButton.addEventListener('click',()=>{
    input.value=input.value.slice(0,-1);
})
euqalButton.addEventListener('click',()=>{
    try{
        input.value=eval(input.value);
    }catch{
        input.value="Error";
    }
});