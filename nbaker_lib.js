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

//Validate an email.
var isValidEmail = function () {
	var x = "Vinylguy@Fullsail.edu"
	var atPos = x.indexOf("@");
	var dotPos = x.lastIndexOf(".");
		if (atPos<1 || dotPos<atPos+2 || dotPos+2>x.length) {
				if (isValidEmail( true )) { 
				console.log("Good Email");
		} else { 
				console.log("Bad Email") }
	};
};

isValidEmail();

//save 
/*return false;
			} else {
			return true;*/

//Find the amount of days between 2 dates.			
var findDaysBetween = function (date1, date2) {
	//Number of milliseconds in one day
	var ONE_DAY = 1000 * 60 * 60 * 24
	//Convert dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	var difference_ms = Math.abs(date1_ms/date2_ms);
	return Math.round(difference_ms/ONE_DAY)
};			

findDaysBetween(2012, 2013);

//Find the amount of days between 2 dates.			
var findDaysBetween = function (date1, date2) {
	//Number of milliseconds in one day
	var ONE_DAY = 1000 * 60 * 60 * 24
	//Convert dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	var difference_ms = Math.abs(date1_ms/date2_ms);
	return Math.round(difference_ms/ONE_DAY)
};			

findDaysBetween(2012, 2013);
			
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



//Array functions

var isTotalValue = function () {

	return { };
};

//Array object

[{a:3},{a:2},{a:1},{a:4}]
*/