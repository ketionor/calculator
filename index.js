//Variables
let operator = '';

//Basic functions
const add = (arr1, arr2) => arr1 + arr2;
const subtract = (arr1, arr2) => arr1 - arr2;
const multiply = (arr1, arr2) => arr1 * arr2;
//const divide = (arr1, arr2) => arr1 + arr2;

//Button event listener
const buttons =  document.querySelectorAll('button');
const display = document.querySelector(['#display-p']);
let num1 = '';
let num2 = '';
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.classList.contains('num-button')) {
            if (operator == '') {
                num1 += e.target.innerHTML;
                console.log(num1);         
                display.innerHTML = num1;
            } else {
                num2 += e.target.innerHTML;
                console.log(num2);         
                display.innerHTML = num2;
            }
        } else if (e.target.classList.contains('function-button')) {
            display.innerHTML = '0';
            operator = e.target.id;
            console.log(operator);
        }
    });
});



//Calculator function
const calculate = (num1, num2, operator) => {
    switch(operator){
        case 'add':
            add(num1, num2);
        case 'subtract':
            subtract(num1, num2);
        case 'multiply':
            multiply(num1, num2);    
    }

}
