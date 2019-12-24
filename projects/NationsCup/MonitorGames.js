const postFeedUrl = "https://www.warzone.com/API/GameFeed?GameID=";
const proxyFeedUrl = "https://warzone-cors-anywhere.herokuapp.com/";

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
            console.log("\tGAME - " + playerMatch[0].name + " vs. " + playerMatch[1].name);
            // If state property received, check if game is over
            if (response.hasOwnProperty("state")) {
                console.log("\t\t" + response.state);
                progress.push(response.state);
                if (response.state == "Finished") {
                    // Game finished
                    let winCondition = "";
                    for (let i = 0; i < response.players.length; i++) {
                        if (response.players[i].state == "Won") {
                            console.log("\t\t\tWON: " + response.players[i].name);
                            progress.push(response.players[i].name);
                        } else {
                            winCondition = response.players[i].state;
                        }
                    }
                    progress.push(winCondition);
                } else if (response.state == "WaitingForPlayers") {
                    let declineFlag = false;
                    for (let i = 0; i < response.players.length; i++) {
                        if (response.players[i].state == "Declined") {
                            // Player(s) declined the game
                            console.log("\t\t\tDECLINED: " + response.players[i].name);
                            progress.push("Declined: " + response.players[i].name);
                            declineFlag = true;
                        }
                    }
                    if (!declineFlag) {
                        // Game not finished
                        console.log("\t\t\tIn Progress");
                        progress.push("In Progress");
                    }
                } else {
                    // Game not finished
                    console.log("\t\t\tIn Progress");
                    progress.push("In Progress");
                }
            } else {
                // Error received
                console.log("\t\t\tERROR - " + response.error);
                progress.push("ERROR");
                progress.push(response.error);
            }
        }
    };

    var gameURL = proxyFeedUrl+postFeedUrl+playerMatch[2].substr(playerMatch[2].indexOf("=") + 1);
    xmlHttp.open("POST", gameURL, false);
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send(createMonitorJSONData());
    return progress;
}