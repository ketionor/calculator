const functionButtons =  document.querySelectorAll(['.function-button']);
const display = document.querySelector(['#display-p']);
const decimalButton = document.querySelector(['#decimal-point']);
const numButton = document.querySelectorAll(['.num-button']);
const calculateButton = document.querySelector('#calculate');
const clearButton = document.querySelector('#clear');
const backspace = document.querySelector('#del');

let operator = '';
let num1 = '';
let num2 = '';
let ans = '';
let decimal = false;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

functionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.innerHTML = '0';
        operator = e.target.id;
        console.log(operator);
        decimal = false;
    })
});

decimalButton.addEventListener('click', (e) => {
        if (decimal) {
            return;
        } else {
            numButtonClicked(e);
            decimal = true;
        }
    });

calculateButton.addEventListener('click', (e) => {
    if (ans == '') {
        calculate(Number(num1), Number(num2), operator);
    }  else {
        calculate(Number(ans), Number(num2), operator); 
    }
});

clearButton.addEventListener('click', () => {
    clear();
});

backspace.addEventListener('click', () => {
    delClicked();
});

numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        numButtonClicked(e);
    });    
});

function numButtonClicked(e) {
    //If no operator has been picked, assign numbers to 'num1'
    if (operator == '' && ans == '') {
        num1 += e.target.innerHTML;       
        display.innerHTML = num1;
        console.log('num1: ' + num1);
    //If no operator has been picked, and there is a value for ans, then clear ans and assign to num1
    } else if (operator == '' && !ans == '') {
        clear();
        num1 += e.target.innerHTML;        
        display.innerHTML = num1;
        console.log('num1: ' + num1);
    //If there is an operator, assign to num2
    } else {
        num2 += e.target.innerHTML;       
        display.innerHTML = num2;
        console.log('num2: ' + num2);
    }            
};

const clear = () => {
    num1 = ''; 
    num2 = ''; 
    ans = '';
    operator = '';
    decimal = false;
    display.innerHTML = '0';
};

const partialClear = () => {
    num1 = '';
    num2 = '';
    operator = '';
};

function delClicked() {
    //If no operator has been picked, assign numbers to 'num1'
    if (operator == '' && ans == '') {        
        num1 = num1.slice(0, num1.length - 1);
        num1 = setToZero(num1);        
        display.innerHTML = num1;
    //If no operator has been picked, and there is a value for ans, then clear ans and assign to num1
    } else if (operator == '' && !ans == '') {
        ans = ans.slice(0, ans.length - 1);
        ans = setToZero(ans); 
        display.innerHTML = ans;
    //If there is an operator, assign to num2
    } else {
        num2 = num2.slice(0, num2.length - 1);
        num2 = setToZero(num2); 
        display.innerHTML = num2;
    }     

    if (display.innerHTML == '') {
        display.innerHTML = '0';
    }
};

function setToZero(string) {
    if (string.length == 0) {
        string = '';
        return string;
    } return string;
};

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

};
