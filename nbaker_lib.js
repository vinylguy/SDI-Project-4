//Nathan Baker
//Assignment 4
//SDI 12/04
//04-24-2012

//Find the smallest value in an array.
var minValue = function (array) {
	min = array[0];
	for (i=0; i<array.length; i++) {
		if (array[i]<min) {
			min = array[i];
		};
	};
return min;

};

var j = new Array();
j = [7, 23, 4, 90, -1, 44, 93];

//Logs the output of the smallest value in a given array
console.log(minValue(j));

//Find the value of numbers in array, even if some are not numbers.
var totValue = function (array) {
	tot = array[0];
	for (i=0; i<array.length; i++) {
		if (!isNaN(parseInt(array[i]))) {
			tot += array[i];
		};
	};
return tot;

};

var k = new Array();
k = [7, "a", 4, 90, "cat", 44, 93];

//Logs the value of the numbers in the array
console.log(totValue(k));

//Validate an email.

function validateEmail (email) {
	var x = email
	var atPos = x.indexOf("@");
	var dotPos = x.lastIndexOf(".");
		if (atPos<1 || dotPos<atPos+2 || dotPos+2>x.length) {
				console.log("Good Email");
		} else { 
				console.log("Bad Email");
		};
};

//Calls the function "validateEmail"
validateEmail("vinylguy@gmail.com");

//Find the amount of days between 2 dates.

Date.daysBetween = function ( date1, date2 ) {
	var oneDay = 1000 * 60 * 60 * 24;
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	var difference_ms = date2_ms - date1_ms;
		return Math.round(difference_ms/oneDay);
};

var startDate = new Date(2012, 3, 20);
var endDate = new Date(startDate.getFullYear() + startDate.getMonth(), startDate.getDate());
var today = new Date();

//Logs the amount of days between two dates.
console.log( "Days since" + endDate.toLocaleDateString() + "; "
			+ Date.daysBetween(startDate, today)
			);


//Validate a phone number in 123-456-7891 sequence.

function isValidNumber (number) {
	var testNum = number
	var phFormat = /^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$/;
	if (phFormat.test(testNum)) {
		console.log("This appears to be a valid phone number");
	} else {
		console.log("This number appears invalid");
	};

};

//Determines if a number is valid in 123-456-7891 format
isValidNumber();

//Change the decimal place on a given number, to a given amount of decimal places.

function changeDecimal(input) {
	var money = input
	money.toFixed(2)
	var output = console.log(money.toFixed(2) + " Is the adjusted value");
	return output
};

//Changes the decimal point of a given number two places.
changeDecimal(2.1);