import { CalculatorCounstructor } from './calculator.mjs';
const calculator = new CalculatorCounstructor();

const calculatorKeyboard = document.querySelector('.calculator-keyboard');
calculatorKeyboard.addEventListener('click', (e) => {
	console.log(e);
	switch (e) {
		case '(':
			break;

		default:
			break;
	}
});

console.log(calculatorKeyboard);

calculator.pushDigit(7);
//calculator.pushDigit(0);
//calculator.pushDigit(0);
calculator.pushOperator('*');
calculator.pushDigit(2);
//calculator.pushDigit(2);
calculator.pushOperator('^');
calculator.pushDigit(2);
calculator.pushDigit(0);
calculator.pushBackspace();
calculator.pushEqual();

// console.log(calculator.expressionWindow);
// console.log(calculator.resultWindow);
