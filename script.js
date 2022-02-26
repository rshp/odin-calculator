function expressionToArray(string) {
	let regEx = /([0-9]*[.])?[0-9]+|\(|\)|\+|-|\*|\^|\//g;
	let regexParsed = string.match(regEx);
	let output = [...regexParsed]; //clone arry
	regexParsed.forEach((element, index) => {
		if (!isNaN(+element)) {
			output[index] = +element; //convert number strings to numbers
		}
	});
	return output;
}

//Count parenthesis
function countParens(arry) {
	let parensIndicator = [];
	let parensCount = 0;
	arry.forEach((element, index) => {
		if (element == '(') {
			parensCount += 1;
			parensIndicator[index] = parensCount;
		} else if (element == ')') {
			parensCount -= 1;
			parensIndicator[index] = parensCount + 1;
		} else parensIndicator[index] = parensCount;
	});
	return parensIndicator;
}

function calcHighestParens(arry, parens) {
	let maxParensValue = Math.max(...parens);
	let maxParensStartIndex = parens.indexOf(maxParensValue);
	let filtered = [];
	for (let i = maxParensStartIndex; i < arry.length; i++) {
		if (parens[i] == maxParensValue) filtered.push(arry[i]);
		else break;
	}
	let spliceLength = filtered.length;
	let evaluated = evaluateFiltered(filtered); //calc filtered array here
	arry.splice(maxParensStartIndex, spliceLength, evaluated);
	return arry;
}

function evaluateFiltered(expression) {
	if (expression[0] === '(') {
		expression.pop(); //remove parenthesis if present
		expression.shift();
	}
	let indx = undefined;
	let localRes = undefined;
	while (expression.indexOf('^') !== -1) {
		indx = expression.indexOf('^');
		localRes = expression[indx - 1] ** expression[indx + 1];
		expression.splice(indx - 1, 3, localRes);
	}
	while (expression.indexOf('*') !== -1) {
		indx = expression.indexOf('*');
		localRes = expression[indx - 1] * expression[indx + 1];
		expression.splice(indx - 1, 3, localRes);
	}
	while (expression.indexOf('/') !== -1) {
		indx = expression.indexOf('/');
		localRes = expression[indx - 1] / expression[indx + 1];
		expression.splice(indx - 1, 3, localRes);
	}
	while (expression.indexOf('-') !== -1) {
		indx = expression.indexOf('-');
		localRes = expression[indx - 1] - expression[indx + 1];
		expression.splice(indx - 1, 3, localRes);
	}
	while (expression.indexOf('+') !== -1) {
		indx = expression.indexOf('+');
		localRes = expression[indx - 1] + expression[indx + 1];
		expression.splice(indx - 1, 3, localRes);
	}
	return +expression; //get rid of single member array
}

function evaluateArray(arry) {
	let parens = countParens(arry);
	let calculated = calcHighestParens(arry, parens);
	while (arry.length > 1) {
		evaluateArray(calculated);
	}
	return +calculated;
}

let testString = '0.21^(87+36)/10-23^2*(2.9-1.58)^.5+(((.98+48)*3.77)^2.9)-3.9';
let parsed = expressionToArray(testString);
console.log(evaluateArray(parsed));
