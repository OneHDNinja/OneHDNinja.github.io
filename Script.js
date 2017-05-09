//function defines that an action will take place.

function changeDateTime() { 
	document.getElementById("dateTime").innerHTML = Date();
}

//innerHTML indicates that content will be inserted
//Date is a preset command whereas "Hello World!" is a string.

function response() {
	document.getElementById("text").innerHTML = "Hello World!";
}

//src indicates that a HTML attribute will be changed. 

function imageChange() {
	document.getElementById("image").src = "ZeldaLogo.png";
}

//style indicates that a CSS property will be changed.

function styleChange() {
		document.getElementById("style").style.fontSize = "35px";
		document.getElementById("style").style.color = "red";
}

/*JavaScript can "display" data in different ways:
	Writing into an HTML element, using innerHTML.
	Writing into the HTML output using document.write().
	Writing into an alert box, using window.alert().
	Writing into the browser console, using console.log(). */
//document refers to what happens to the html site itself. It can be changed by finding Ids (getElementById) or wiped with overwriting (write)


//document.write is used for single calculations which wipe the page entirely, use only for testing
	
function documentWriteChange() {
		document.write(10 * 50);
}

//window.alert doesn't wipe the page and instead creates a dialogue box; less destructive
	
function windowAlertChange() {
		window.alert(10 * 50);
}

//console.log performs the calculation in the debug console, accessed by hitting F12
	
function consoleLogChange() {
		console.log(10 * 50);
}

function calcTest() {
		window.alert(p3 * p4);
}

var p3 = 9;
var p4 = 3;	

	
	
	
	
	
	