


function typeName() {
    var speed = 50;
    var name = "Justin Reiter";

    if (document.getElementById("name").innerHTML.length() < name.length()) {
        document.getElementById("name").innerHTML += name.charAt(document.getElementById("name").length());
        setTimeout(typeName, speed);
    }
}