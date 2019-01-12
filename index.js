

var i = 0;
function typeName() {
    let speed = 50;
    let name = "I am Justin Reiter!";
    if (document.getElementById("name").innerHTML === "Hello!") {
        setTimeout(null, 3000);
        document.getElementById("name").innerHTML = "";
    }
    if (i < name.length) {
        document.getElementById("name").innerHTML += name.charAt(i);
        i++;
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

function setParticles() {
    var fm = document.getElementById('aboutme');
    fm.setAttribute('particles-div', 'height: ' + document.getElementById('aboutme').style.bottom);
    fm.setAttribute('particles-js', 'height:  ' + document.getElementById('aboutme').style.bottom);
}


function wrapperOnload() {
    typeName();
    setParticles();
}

window.onload = wrapperOnload;


