// Sticky navbar
 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    };
};

//Function button Hitung

//Calculate luas
function calculateArea(){
    //Apply default style and value before generating result
    document.getElementById("input-tinggi").style.border = "";
    document.getElementById("input-alas").style.border = "";
    document.getElementById("validate-tinggi").innerHTML = "";
    document.getElementById("validate-alas").innerHTML = "";
    document.getElementById("luas-result").innerHTML = "";
    
    //Store input value to variable
    let tinggi = document.getElementById("input-tinggi").value;
    let alas = document.getElementById("input-alas").value;

    //Validate input tinggi dan alas
    let validateTinggi;
    let validateAlas;

    if(isNaN(tinggi) || tinggi <= 0 || isNaN(alas) || alas <= 0){
        //Validate input tinggi
        if(isNaN(tinggi) || tinggi <= 0){
            if(isNaN(tinggi) || tinggi === ""){
                validateTinggi = "Please input a number";
            }
            else{
                validateTinggi = "Number must be positive";
            }
            document.getElementById("input-tinggi").style.border = "1.5px solid red";
            document.getElementById("validate-tinggi").innerHTML = validateTinggi;
        };

        //Validate input alas
        if(isNaN(alas) || alas <= 0){
            if(isNaN(alas) || alas === ""){
                validateAlas = "Please input a number";
            }
            else{
                validateAlas = "Number must be positive";
            }
            document.getElementById("input-alas").style.border = "1.5px solid red";
            document.getElementById("validate-alas").innerHTML = validateAlas;
        };
    }
    //Show result if input correct
    else{
        let luasResult = 1/2*alas*tinggi;
        document.getElementById("luas-result").innerHTML = "Luas = 1/2 * " + tinggi + " * " + alas + " = " + luasResult;
    };
};

//Calculate keliling
function calculateCircumference(){
    //Apply default style and value before generating result
    document.getElementById("validate-side1").innerHTML = "";
    document.getElementById("validate-side2").innerHTML = "";
    document.getElementById("validate-side3").innerHTML = "";
    document.getElementById("input-side1").style.border = "";
    document.getElementById("input-side2").style.border = "";
    document.getElementById("input-side3").style.border = "";
    document.getElementById("keliling-result").innerHTML = "";
    
    //Store input value to variable
    let side1 = document.getElementById("input-side1").value;
    let side2 = document.getElementById("input-side2").value;
    let side3 = document.getElementById("input-side3").value;
    
    //Validate input triangle side
    let validateSide1;
    let validateSide2;
    let validateSide3;

    if(isNaN(side1) || side1 <= 0 || isNaN(side2) || side2 <= 0 || isNaN(side3) || side3 <= 0){
        //Validate input side1
        if(isNaN(side1) || side1 <= 0){
            if(isNaN(side1) || side1 === ""){
                validateSide1 = "Please input a number";
            }
            else{
                validateSide1 = "Number must be positive";
            }
            document.getElementById("input-side1").style.border = "1.5px solid red";
            document.getElementById("validate-side1").innerHTML = validateSide1;
        };

        //Validate input side2
        if(isNaN(side2) || side2 <= 0){
            if(isNaN(side2) || side2 === ""){
                validateSide2 = "Please input a number";
            }
            else{
                validateSide2 = "Number must be positive";
            }
            document.getElementById("input-side2").style.border = "1.5px solid red";
            document.getElementById("validate-side2").innerHTML = validateSide2;
        };

        //Validate input side3
        if(isNaN(side3) || side3 <= 0){
            if(isNaN(side3) || side3 === ""){
                validateSide3 = "Please input a number";
            }
            else{
                validateSide3 = "Number must be positive";
            }
            document.getElementById("input-side3").style.border = "1.5px solid red";
            document.getElementById("validate-side3").innerHTML = validateSide3;
        };
    }
    //Show result if input correct
    else{
        let kelilingResult = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
        document.getElementById("keliling-result").innerHTML = "Keliling = " + side1 + " + " + side2 + " + " + side3 + " = " + kelilingResult;
    };
};

//Trigger action with Enter

//Section luas
var tinggiInput = document.getElementById("input-tinggi");
tinggiInput.addEventListener("keypress", function(eventTinggi) {
    if(eventTinggi.key === "Enter") {
        eventTinggi.preventDefault();
        document.getElementById("input-alas").focus();
    };
});

var alasInput = document.getElementById("input-alas");
alasInput.addEventListener("keypress", function(eventAlas) {
    if(eventAlas.key === "Enter") {
        eventAlas.preventDefault();
        document.getElementById("calc-luas").click();
    };
});

//Section keliling
var firstSideInput = document.getElementById("input-side1");
firstSideInput.addEventListener("keypress", function(eventSide1) {
    if(eventSide1.key === "Enter") {
        eventSide1.preventDefault();
        document.getElementById("input-side2").focus();
    };
});

var secondSideInput = document.getElementById("input-side2");
secondSideInput.addEventListener("keypress", function(eventSide2) {
    if(eventSide2.key === "Enter") {
        eventSide2.preventDefault();
        document.getElementById("input-side3").focus();
    };
});

var thirdSideInput = document.getElementById("input-side3");
thirdSideInput.addEventListener("keypress", function(eventSide3) {
    if(eventSide3.key === "Enter") {
        eventSide3.preventDefault();
        document.getElementById("calc-keliling").click();
    };
});

//Function button Reset

function resetInputLuas(){
    document.getElementById("input-tinggi").value = "";
    document.getElementById("input-alas").value = "";
    document.getElementById("validate-tinggi").innerHTML = "";
    document.getElementById("validate-alas").innerHTML = "";
    document.getElementById("input-tinggi").style.border = "";
    document.getElementById("input-alas").style.border = "";
    document.getElementById("luas-result").innerHTML = "";
};

function resetInputKeliling(){
    document.getElementById("input-side1").value = "";
    document.getElementById("input-side2").value = "";
    document.getElementById("input-side3").value = "";
    document.getElementById("validate-side1").innerHTML = "";
    document.getElementById("validate-side2").innerHTML = "";
    document.getElementById("validate-side3").innerHTML = "";
    document.getElementById("input-side1").style.border = "";
    document.getElementById("input-side2").style.border = "";
    document.getElementById("input-side3").style.border = "";
    document.getElementById("keliling-result").innerHTML = "";
    };