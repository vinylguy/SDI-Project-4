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


var isValidEmail = function (emailaddress) {
	var x = emailaddress
	var atPos = x.indexOf("@");
	var dotPos = x.lastIndexOf(".");
		if (atPos<1 || dotPos<atPos+2 || dotPos+2>x.length) {
			console.log( "This is not a valid e-mail address" );
			return false;
			} else {
			console.log( "This is a valid e-email address" );
			return true;
	};
};

isValidEmail (Vinylguy@Fullsail.edu);



//String functions
/*
var isURL = function () {

	return { };
};

var isValidEmail = function () {

	return { };
};

var isValidPhoneNumber = function () {

	return { };
};

//Number functions

var findDaysDifference = function () {

	return { };
};

//Array functions

var isTotalValue = function () {

	return { };
};

//Array object

[{a:3},{a:2},{a:1},{a:4}]
*/