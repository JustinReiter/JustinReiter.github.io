var x = 0;

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

/* Temporary removal for different method
function setParticles() {

    var fm = document.querySelector('#aboutme');
    let compStyles = window.getComputedStyle(fm);;
    console.log(compStyles.getPropertyValue("bottom"));
    fm.setAttribute('particles-div', 'bottom: ' + compStyles.getPropertyValue("bottom"));
    fm.setAttribute('particles-js', 'bottom:  ' + compStyles.getPropertyValue("bottom"));
    fm.setAttribute('particles-div', 'z-index: -1000');
    fm.setAttribute('particles-js', 'z-index: -999');
    fm.setAttribute('aboutme', 'bottom: ' + compStyles.getPropertyValue("bottom"));
}
*/


function wrapperOnload() {
    typeName();
    // setParticles();
}




window.onload = wrapperOnload;


