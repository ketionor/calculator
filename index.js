//Global variables
let operator = '';
let num1 = '';
let num2 = '';
let ans = '';

//Basic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

//Button event listener
const buttons =  document.querySelectorAll('button');
const display = document.querySelector(['#display-p']);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.classList.contains('num-button')) {
            if (operator == '' && ans == '') {
                num1 += e.target.innerHTML;
                console.log(num1);         
                display.innerHTML = num1;
            } else if (operator == '' && !ans == '') {
                clear();
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
        } else if (e.target.id == 'clear') {
            clear();
        } else {
            if (ans == '') {
            console.log(num1, num2, operator);
            calculate(Number(num1), Number(num2), operator);
            }  else {
            calculate(Number(ans), Number(num2), operator); 
            }
        }
    });
});

//Clear calc
const clear = () => {
    num1 = ''; 
    num2 = ''; 
    ans = '';
    operator = '';
    console.log('clear');
    display.innerHTML = '0';
};

const partialClear = () => {
    num1 = '';
    num2 = '';
    operator = '';
    console.log('partialCLear');
}

//Calculator function
const calculate = (num1, num2, operator) => {
    if (num2 === 0) {
        display.innerHTML = 'Yeah right.'
    } else { 
        switch(operator) {
        case 'add':
            ans = add(num1, num2);
            display.innerHTML = ans.toPrecision(8);
            break;
        case 'subtract':
            ans = subtract(num1, num2);
            display.innerHTML = ans.toPrecision(8);
            break;
        case 'multiply':
            ans = multiply(num1, num2);
            display.innerHTML = ans.toPrecision(8);
            break;  
        case 'divide':
            ans = divide(num1, num2); 
            display.innerHTML = ans.toPrecision(8);
            break; 
        } 
    }
    //Need to truncate trailing zeroes from the answer, not sure how to do that yet
    //display.innerHTML = ans.toPrecision(8);
    console.log(num2);
    partialClear()

}
