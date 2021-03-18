let btn1 = document.getElementById ("btn1");
let btn2 = document.getElementById ("btn2");
let btn3 = document.getElementById ("btn3");
let btn4 = document.getElementById ("btn4");
let btn5 = document.getElementById ("btn5");
let btn6 = document.getElementById ("btn6");
let btn7 = document.getElementById ("btn7");
let btn8 = document.getElementById ("btn8");
let btn9 = document.getElementById ("btn9");
let btn0 = document.getElementById ("btn0");
let tablero = document.getElementById ("tablero");
let teclaTemp = ""

const btn1f = () => {
    tablero.innerHTML = "1"
    tablero.innerHTML = teclaTemp + "1";
    teclaTemp = teclaTemp + "1";
    console.log(teclaTemp);
}

const btn2f = () => {
    tablero.innerHTML = "2"
    tablero.innerHTML = teclaTemp + "2";
    teclaTemp = teclaTemp + "2";
    console.log(teclaTemp);
}

const btn3f = () => {
    tablero.innerHTML = "3"
    tablero.innerHTML = teclaTemp + "3";
    teclaTemp = teclaTemp + "3";
    console.log(teclaTemp);
}

const btn4f = () => {
    tablero.innerHTML = "4"
    tablero.innerHTML = teclaTemp + "4";
    teclaTemp = teclaTemp + "4";
    console.log(teclaTemp);
}

const btn5f = () => {
    tablero.innerHTML = "5"
    tablero.innerHTML = teclaTemp + "5";
    teclaTemp = teclaTemp + "5";
    console.log(teclaTemp);
}

const btn6f = () => {
    tablero.innerHTML = "6"
    tablero.innerHTML = teclaTemp + "6";
    teclaTemp = teclaTemp + "6";
    console.log(teclaTemp);
}

const btn7f = () => {
    tablero.innerHTML = "7"
    tablero.innerHTML = teclaTemp + "7";
    teclaTemp = teclaTemp + "7";
    console.log(teclaTemp);
}

const btn8f = () => {
    tablero.innerHTML = "8"
    tablero.innerHTML = teclaTemp + "8";
    teclaTemp = teclaTemp + "8";
    console.log(teclaTemp);
}

const btn9f = () => {
    tablero.innerHTML = "9"
    tablero.innerHTML = teclaTemp + "9";
    teclaTemp = teclaTemp + "9";
    console.log(teclaTemp);
}

const btn0f = () => {
    tablero.innerHTML = "0"
    tablero.innerHTML = teclaTemp + "0";
    teclaTemp = teclaTemp + "0";
    console.log(teclaTemp);
}

btn1.onclick = function () {
    btn1f();
}

btn2.onclick = function () {
    btn2f();
}

btn3.onclick = function () {
    btn3f();
}

btn4.onclick = function () {
    btn4f();
}

btn5.onclick = function () {
    btn5f();
}

btn6.onclick = function () {
    btn6f();
}

btn7.onclick = function () {
    btn7f();
}

btn8.onclick = function () {
    btn8f();
}

btn9.onclick = function () {
    btn9f();
}

btn0.onclick = function () {
    btn0f();
}