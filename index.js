//Basic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
//const divide = (num1, num2) => num1 + num2;

//Button event listener
const buttons =  document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
    });
})

//Calculator function
