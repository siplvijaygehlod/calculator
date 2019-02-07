var docPowerVal = document.getElementById("powerButton");
var docCalScreen = document.getElementById("calScreen");
var docResetVal = document.getElementById("resetButton");
var docDigitVal = document.getElementsByClassName("digits");
var docOperationVal = document.getElementsByClassName("operation");
var formValueGlobal = 0;

function powerChange() {
    if (docPowerVal.value === "Poweroff") {
        docPowerVal.value = "Poweron";
        docCalScreen.disabled = true;
        docCalScreen.value = " ";
        docPowerVal.style.backgroundColor = "green";
        docCalScreen.style.backgroundColor = "black";


    } else {
        docPowerVal.value = "Poweroff";
        docCalScreen.disabled = false;
        docPowerVal.style.backgroundColor = "black";
        docCalScreen.style.backgroundColor = "white";
    }
}

function inputReset() {
    console.log(docPowerVal.value);
    if (docResetVal.value === "Reset" && docCalScreen.disabled === true) {
        alert("Please first power on Calculator!!!");

    } else {
        formValueGlobal = 0;
        docCalScreen.value == " " ? alert("No Value Found!!!") : docCalScreen.value = null;
    }
}
/**
function validateData() {
    var inputData = document.getElementById("calScreen").value;
    if (inputData.search(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || '+' || '-'))
        console.log("S");
    else
        console.log("F");
}
 */

function calculation(formValue) {
    /**var pattern = /[0-9]/g;
    var operators = /(+ | - | * | '/ | % ) /
if (formValue.match(pattern) || formValue.match(operators)) {}  */
    //console.log(formValue);
    formValueGlobal += formValue;
    docCalScreen.value += formValue;

}

function equaloperation() {

    var result = eval(formValueGlobal);
    //console.log(Math.round(result));
    docCalScreen.value = result;
}