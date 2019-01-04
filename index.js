

var i = 0;
function typeName() {
    let speed = 50;
    let name = "I am Justin Reiter";
    if (document.getElementById("name").innerHTML === "Hello!") {

        document.getElementById("name").innerHTML = "";
    }
    if (i < name.length) {
        document.getElementById("name").innerHTML += name.charAt(i);
        i++
        setTimeout(typeName, speed);
    }
}
window.onload = typeName;

function navBar() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


