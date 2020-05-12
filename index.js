//Variables
let operator = '';

//Basic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

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
        } else {
            console.log(num1, num2, operator);
            calculate(Number(num1), Number(num2), operator);
        }
    });
});

//Calculator function
const calculate = (num1, num2, operator) => {
    switch(operator){
        case 'add':
            ans = add(num1, num2);
            break;
        case 'subtract':
            ans = subtract(num1, num2);
            break;
        case 'multiply':
            ans = multiply(num1, num2);
            break;  
        case 'divide':
            ans = divide(num1, num2); 
            break;  
    }
    console.log(ans);
    display.innerHTML = ans;

}
