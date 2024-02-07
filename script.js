

function pushLetter(textInButton){
    var txt = document.getElementById("inputTxt");
    var letters = textInButton;
    txt.value=txt.value + letters;
}

function backSpace(){
    var input = document.getElementById('inputTxt');
    input.value = input.value.slice(0,-1); //slice betyr å slette/fjere, mens 0 i parantesen er starten i linjen og  -1 betyr at du kan fjerne 1 item fra bakerst
}

function reSet(){
    location.reload();
}

function addSpace (){
    var input = document.getElementById('inputTxt');
    input.value += ' ';
}