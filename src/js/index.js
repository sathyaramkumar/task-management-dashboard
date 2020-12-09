function onClick() {
var weekCheck = document.getElementById('weekCheck');
var label = document.getElementById('weekCheckLabel');

if (weekCheck.checked == true) {
    label.style.backgroundColor = "white";
    label.style.color = "black";
}else {
    label.style.backgroundColor = "transparent";
    label.style.color = "white";
}
}

function onClick2() {
    var weekCheck = document.getElementById('monthCheck');
    var label = document.getElementById('monthCheckLabel');
    
    if (weekCheck.checked == true) {
        label.style.backgroundColor = "white";
        label.style.color = "black";
    }else {
        label.style.backgroundColor = "transparent";
        label.style.color = "white";
    }
    }