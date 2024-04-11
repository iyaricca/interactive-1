let fruits = [
	"apple",
	"orange",
	"pear",
	"grape",
	"strawberry",
	"kiwi"
];

let length = fruits.length;


function constructText(input) {;
	let count = input.length;
	return "The word " + input + " has " + count + " characters.";

}

for (i = 0; i < lenght; i++) {
	console.log(constructText(fruits[i]));
}

/*
or (i = 0; i < lenght; i++) {
	outputText();
}

function outputText() {
	console.log("this is now inside a function");
	let count = fruits[i].length;
	console.log("The word " + fruits[i] + " has " + count + " characters.");

}

let x = myFunction(4, 3);

function myFunction(a, b) {
//Function returns the product of a and b
	return a * b;
}

console.log (x);


*/