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

console.log(minValue(j));

//Find the value of numbers in array, even if some are not numbers.
var totValue = function (array) {
	tot = array[0];
	for (var i=0; i<array.length; i++) {
		if (!isNaN(parseInt(array[i]))) {
			tot += array[i];
		};
	};
return tot;

};

var k = new Array();
k = [7, "a", 4, 90, "cat", 44, 93];

console.log(totValue(k));

//Validate an email.
var isValidEmail = function () {
	var x = "Vinylguy@Fullsail.edu"
	var atPos = x.indexOf("@");
	var dotPos = x.lastIndexOf(".");
		if (atPos<1 || dotPos<atPos+2 || dotPos+2>x.length) {
			return true;
				if (isValidEmail( true )) { 
				console.log("Good Email");
		} else { 
				console.log("Bad Email");
		};
	};
};

isValidEmail();

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
console.log( "Days since" + endDate.toLocaleDateString() + "; "
			+ Date.daysBetween(startDate, today)
			);

//String functions
/*
var isURL = function () {

	return { };
};

var isValidPhoneNumber = function () {

	return { };
};

//Number functions



//Array functions

var isTotalValue = function () {

	return { };
};

//Array object

[{a:3},{a:2},{a:1},{a:4}]
*/