const postFeedUrl = "https://www.warzone.com/API/GameFeed?GameID=";
const proxyFeedUrl = "https://cors-anywhere.herokuapp.com/";

// Converts game details in packed object
function createMonitorJSONData() {
    return "Email=" + document.getElementById("emailMonitorInput").value + "&APIToken=" + encodeURIComponent(document.getElementById("apitokenMonitorInput").value);
}

// Creates games given a single match from ExcelGameConverter ([p1 : {name, id}, p2])
function monitorGame(playerMatch) {
    var xmlHttp = new XMLHttpRequest();
    var progress = [];
    var response;
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            response = JSON.parse(xmlHttp.responseText);
            progress.push(response.state);
            console.log(response.state + " - " + playerMatch[0].name + " vs. " + playerMatch[1].name);
            if (response.state == "Finished") {
                // Game finished
                for (let i = 0; i < response.players.length; i++) {
                    if (response.players[i].state == "Won") {
                        console.log("WON: " + response.players[i].name);
                        progress.push(response.players[i].name);
                    }
                }
            } else {
                // Game not finished or found
                console.log("In Progress");
                progress.push("In Progress");
            }
        }
    };

    var gameURL = proxyFeedUrl+postFeedUrl+playerMatch[2].substr(playerMatch[2].indexOf("=") + 1);
    xmlHttp.open("POST", gameURL, false);
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send(createMonitorJSONData());
    return progress;
}