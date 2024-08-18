butoon1 = document.getElementById(1);
butoon0 = document.getElementById(0);

ScreenVal = document.querySelector("#screen");
var equationVar = "";

let history = [];

function equation(val) {
    equationVar = equationVar + val;
    ScreenVal.value = equationVar;
}

function answer() {
    let ans = eval(equationVar);
    ScreenVal.value = equationVar + "=" + ans;
    history.push(equationVar + "=" + ans);
}

function Clear() {
    equationVar = "";
    ScreenVal.value = equationVar;
}

let historyDiv = document.getElementById("his");

function past() {
    let clean = " ";
    historyDiv.innerHTML = clean;
    for (let i = 0;  i < history.length; i++ ) {
        
        historyDiv.innerHTML += history[i] + '<br>';
        console.log(history[i]);
    }
}

