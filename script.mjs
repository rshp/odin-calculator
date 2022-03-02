import { CalculatorCounstructor } from './calculator.mjs';
const calculator = new CalculatorCounstructor();
const calculatorKeyboard = document.querySelector('.calculator-keyboard');
const calculatorExpressionDiv = document.querySelector('.bottom-display');
const calculatorResultDiv = document.querySelector('.top-display');
calculatorKeyboard.addEventListener('click', (e) => {
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
		case '(':
			calculator.pushParenthesisLeft();
			break;
		case ')':
			calculator.pushParenthesisRight();
			break;
		case '+':
			calculator.pushOperator('+');
			break;
		case '-':
			calculator.pushOperator('-');
			break;
		case '*':
			calculator.pushOperator('*');
			break;
		case '/':
			calculator.pushOperator('/');
			break;
		case '.':
			calculator.pushDecimalPoint();
			break;
		case '':
			calculator.pushBackspace();
			break;
		case 'AC':
			calculator.pushClearAll();
			calculatorResultDiv.innerHTML = calculator.resultWindow;
			break;
		case '=':
			calculator.pushEqual();
			calculatorResultDiv.innerHTML = calculator.resultWindow;
			break;
	}
	calculatorExpressionDiv.innerHTML = calculator.expressionWindow;
});
