let testString = '837+376-23^2*(2.9-1.58)^.5+((.98-488)*3.77^2.90)-3.99';
let testResult =
	837 +
	376 -
	23 ** 2 * (2.9 - 1.58) ** 0.5 +
	(0.98 - 488) * 3.77 ** 2.9 -
	3.99;
console.log(testResult);
console.log(testString.match(/([0-9]*[.])?[0-9]+/g));
