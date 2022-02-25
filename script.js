function parseWithRegex(string) {
	let regEx = /([0-9]*[.])?[0-9]+|\(|\)|\+|-|\*|\^|\//g;
	return string.match(regEx);
}

//Convert number strings to numbers
function parseNumbers(arry) {
	let output = [...arry]; //clone arry
	arry.forEach((element, index) => {
		if (!isNaN(+element)) {
			output[index] = +element;
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
	//let endOfSequence = 0;
	let filtered = arry.filter((value, index) => {
		//here is the problem where filtered should be only the first encoutered UNINTERRUPTED sequence of maxParensValue.
		if (parens[index] == maxParensValue) return true; //this should be rewritten so that any other segments of maxParensValue in array are ignored
	});
	console.log(filtered);
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

let testString = '0.21^(87+36)/10-23^2*(2.9-1.58)^.5+(((.98-48)*3.77)^2.9)-3.9';
let parsedWithRegex = parseWithRegex(testString);
let parsed = parseNumbers(parsedWithRegex);
evaluateArray(parsed);

function evaluateArray(arry) {
	let parens = countParens(arry);
	console.table([arry, parens]);
	let calculated = calcHighestParens(arry, parens);
	while (arry.length > 1) {
		evaluateArray(calculated);
	}
}

//given an array1
//-calc array of parens
//-get highest parens
//-calc hiest parens term
//-substitute term in array1
//-call self with array1 until return length is 0
//
