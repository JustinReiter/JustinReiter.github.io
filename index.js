


function typeName() {
    let speed = 50;
    let name = "Justin Reiter";

    if (document.getElementById("name").innerHTML.length < name.length) {
        document.getElementById("name").innerHTML += name.charAt(document.getElementById("name").length());
        setTimeout(typeName, speed);
    }
}

function navBar() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onload = function() {
    typeName();
};
