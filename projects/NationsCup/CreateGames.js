const postUrl = "https://www.warzone.com/API/CreateGame"
const viewGameUrl = "https://www.warzone.com/MultiPlayer?GameID="
const proxyurl = "https://warzone-cors-anywhere.herokuapp.com/";
// curl -ks --data-urlencode "Email=justin.reiter.1@gmail.com" --data-urlencode "APIToken=$apitoken" POST https://www.warzone.com/API/GameIDFeed?LadderID=0

const teamMapping = {
    "IRL": "1",
    "GER D": "2",
    "SPA&POR": "3",
    "SWI": "4",
    "BEL": "5",
    "NL A": "6",
    "NL B": "7",
    "NL C": "8",
    "NL D": "9",
    "ITA": "10",
    "UK A": "11",
    "UK B": "12",
    "UK C": "13",
    "HEL": "14",
    "GER A": "15",
    "GER B": "16",
    "GER C": "17",
    "CZE A": "18",
    "CZE B": "19",
    "POL A": "20",
    "POL B": "21",
    "POL C": "22",
    "POL D": "23",
    "FIN": "24",
    "AUS&NZ A": "25",
    "AUS&NZ B": "26",
    "CAN": "27",
    "S AME": "28",
    "USA A": "29",
    "USA B": "30",
    "USA C": "31",
    "USA D": "32",
    "FRA A": "33",
    "FRA B": "34",
    "FRA C": "35",
    "FRA D": "36",
    "NOR A": "37",
    "NOR B": "38"
};


// Converts game details in packed object
function createJSONData(playerMatch, teams) {
    var object = {hostEmail: document.getElementById("emailInput").value, hostAPIToken: document.getElementById("apitokenInput").value.replace(/\\&/g, "\\&")};
    object.templateID = document.getElementById("templateInput").value;
    object.gameName = "Nations' Cup 2021 - " + teams[0] + " vs. " + teams[1];
    object.personalMessage = "This game is a part of the Nations' Cup, run by Rento (https://docs.google.com/spreadsheets/d/1aIf2fmJF3saG5JKaRF9bgncvlmJ8WpwIntCzGFflXSk/edit?usp=sharing). \n\nMatch is between:\n\t" + playerMatch[0].name + " in " + teams[0] + "\n\t" + playerMatch[1].name + " in " + teams[1];
    object.players = [];
    for (var i = 0; i < playerMatch.length; i++) {
        object.players.push({token: playerMatch[i].playerId.substr(playerMatch[i].playerId.indexOf("=") + 1), team: teamMapping[teams[i]] || "100"});
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
    xmlHttp.send(JSON.stringify(createJSONData(playerMatch, [team1.trim(), team2.trim()])));
    return gameID;
}

function testGame() {
    var xmlHttp = new XMLHttpRequest();
    var gameID;
    console.log("TESTING");
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

    var playerMatch = createPlayerMatchUp(createPlayerObject("JustinR17", "https://www.warzone.com/Profile?p=1277277659"), createPlayerObject("Joi179", "https://www.warzone.com/Profile?p=8070854578"));


    xmlHttp.open("POST", proxyurl+postUrl, false);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send(JSON.stringify(createJSONData(playerMatch, ["Team A", "Team B"])));
    return gameID;
}