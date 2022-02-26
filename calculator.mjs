import { evaluateExpression } from './parser.mjs';
export function CalculatorCounstructor() {
	this.resultWindow = '';
	this.expressionWindow = '';
	this.errorState = undefined;
	this.flags;
}
CalculatorCounstructor.prototype.pushDigit = function (digit) {
	this.expressionWindow += `${digit}`;
};
CalculatorCounstructor.prototype.pushOperator = function (operator) {
	this.expressionWindow += `${operator}`;
};
CalculatorCounstructor.prototype.pushDecimalPoint = function () {
	this.expressionWindow += `.`;
};
CalculatorCounstructor.prototype.pushParenthesisLeft = function () {
	this.expressionWindow += `(`;
};
CalculatorCounstructor.prototype.pushParenthesisRight = function () {
	this.expressionWindow += `)`;
};
CalculatorCounstructor.prototype.pushBackspace = function () {
	this.expressionWindow = this.expressionWindow.slice(0, -1);
};
CalculatorCounstructor.prototype.pushEqual = function () {
	this.resultWindow = evaluateExpression(this.expressionWindow);
};
CalculatorCounstructor.prototype.pushClearAll = function () {
	this.resultWindow = '';
	this.expressionWindow = '';
	this.errorState = undefined;
	this.flags;
};
CalculatorCounstructor.prototype.pushClearInput = function () {
	this.expressionWindow = '';
};
