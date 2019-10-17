const postUrl = "https://www.warzone.com/API/CreateGame"
const viewGameUrl = "https://www.warzone.com/MultiPlayer?GameID="
const proxyurl = "https://warzone-cors-anywhere.herokuapp.com/";
// curl -ks --data-urlencode "Email=justin.reiter.1@gmail.com" --data-urlencode "APIToken=$apitoken" POST https://www.warzone.com/API/GameIDFeed?LadderID=0


// Converts game details in packed object
function createJSONData(playerMatch, team1, team2) {
    var object = {hostEmail: document.getElementById("emailInput").value, hostAPIToken: document.getElementById("apitokenInput").value.replace(/\\&/g, "\\&")};
    object.templateID = document.getElementById("templateInput").value;
    object.gameName = "Nations Cup - " + team1 + " vs. " + team2;
    object.personalMessage = "This game is a part of the Nations Cup, run by Rento (https://docs.google.com/spreadsheets/d/1op7iJ_XRTSNty4ON1xr6WvUJcL8Yp5Y4aI8DnmZIuH4/edit#gid=0). Game is between: " + playerMatch[0].name + " in " + team1 + " and " + playerMatch[1].name + " in " + team2;
    object.players = [];
    for (var i = 0; i < playerMatch.length; i++) {
        object.players.push({token: playerMatch[i].playerId.substr(playerMatch[i].playerId.indexOf("=") + 1), team: "None"});
    }

    return object;
}

// Creates games given a single match from ExcelGameConverter ([p1 : {name, id}, p2])
function createGame(playerMatch, team1, team2) {
    var xmlHttp = new XMLHttpRequest();
    var gameID;
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            gameID = JSON.parse(xmlHttp.responseText);
            if (gameID.hasOwnProperty("gameID")) {
                // Game succesfully created
                console.log("\t" + gameID.gameID + " - " + playerMatch[0].name + " vs. " + playerMatch[1].name);
                gameID = viewGameUrl+gameID.gameID;
            } else {
                // Game not created successfully
                console.log("\tERROR - " + gameID.error + " - " + playerMatch[0].name + " + " + playerMatch[1].name);
                gameID = "ERROR - " + gameID.error;
            }
        }
    };
    xmlHttp.open("POST", proxyurl+postUrl, false);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send(JSON.stringify(createJSONData(playerMatch, team1, team2)));
    return gameID;
}