import { CalculatorCounstructor } from './calculator.mjs';
const calculator = new CalculatorCounstructor();
const calculatorKeyboard = document.querySelector('.calculator-keyboard');
const calculatorExpressionDiv = document.querySelector('.bottom-display');

calculatorKeyboard.addEventListener('click', (e) => {
	console.log(e);
	switch (e.target.innerHTML) {
		case '1':
			calculator.pushDigit(1);
			break;
		case '2':
			calculator.pushDigit(2);
			break;
		case '3':
			calculator.pushDigit(3);
			break;
		case '4':
			calculator.pushDigit(4);
			break;
		case '5':
			calculator.pushDigit(5);
			break;
		case '6':
			calculator.pushDigit(6);
			break;
		case '7':
			calculator.pushDigit(7);
			break;
		case '8':
			calculator.pushDigit(8);
			break;
		case '9':
			calculator.pushDigit(9);
			break;
		case '0':
			calculator.pushDigit(0);
			break;
	}
	calculatorExpressionDiv.innerHTML = calculator.expressionWindow;
});

// console.log(calculatorKeyboard);

// calculator.pushDigit(7);
// //calculator.pushDigit(0);
// //calculator.pushDigit(0);
// calculator.pushOperator('*');
// calculator.pushDigit(2);
// //calculator.pushDigit(2);
// calculator.pushOperator('^');
// calculator.pushDigit(2);
// calculator.pushDigit(0);
// calculator.pushBackspace();
// calculator.pushEqual();

// console.log(calculator.expressionWindow);
// console.log(calculator.resultWindow);
