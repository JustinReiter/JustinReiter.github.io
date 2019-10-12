const postUrl = "https://www.warzone.com/API/CreateGame"
const templateId = 1257165;
const email = "Justin.Reiter.1@gmail.com";
const apiToken = "7$B*e6v1*J0r6ay*8%^Y5o051umm$RiMZsKRgV!bXo$ASAZ";

const joiemail = "Joi17900@gmail.com";
const joitoken = "e%trkK6HhoJ2x$w$p6Rus2%6GaVhS2dNoNn1KjnhP3@Z";
// curl -ks --data-urlencode "Email=justin.reiter.1@gmail.com" --data-urlencode "APIToken=$apitoken" POST https://www.warzone.com/API/GameIDFeed?LadderID=0


// Converts game details in packed object
function createJSONData(playerMatch, team1, team2) {
    var object = {hostEmail: email, hostAPIToken: apiToken};
    object.templateId = templateId;
    object.gameName = "Nations Cup - " + team1 + " vs. " + team2;
    object.personalMessage = "This game is a part of the Nations Cup, run by Rento. Game is between: " + playerMatch[0].name + " in " + team1 + " and " + playerMatch[1].name + " in " + team2;
    object.Pace = "MultiDay";
    object.DirectBookt = 4320.0;
    object.AutoBoot = 4320.0;
    object.BankingBootTimes = "null";

    object.players = [];
    for (var i = 0; i < playerMatch.length; i++) {
        object.players.push({token: playerMatch[i].playerId, team: "None"});
    }

    return object;
}

// Creates games given a single match from ExcelGameConverter ([p1 : {name, id}, p2])
function createGame(playerMatch, team1, team2) {

    var xmlHttp = new XMLHttpRequest();
    var gameId;
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            gameId = JSON.parse(xmlHttp.responseText).gameId;
        }
    };
    xmlHttp.open("POST", postUrl, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(createJSONData(playerMatch, team1, team2)));

    if (gameId.hasOwnProperty("gameID")) {
        console.log(gameId);
        gameIdArr.push(gameId);
    } else {
        console.log("ERROR - createGame: " + playerMatch[0].name + " + " + playerMatch[1].name);
    }

    return gameId;
}



// Converts game details in packed object
function createTestJSONData() {
    var object = {hostEmail: joiemail, hostAPIToken: joitoken};
    object.templateId = templateId;
    object.gameName = "Nations Cup - " + "team1" + " vs. " + "team2";
    object.personalMessage = "This game is a part of the Nations Cup, run by Rento. Game is between";
    object.Pace = "MultiDay";
    object.DirectBookt = 4320.0;
    object.AutoBoot = 4320.0;
    object.BankingBootTimes = "null";
    object.PracticeGame = true;

    object.players = [];
    object.players.push({token: "1277277659", team: "None"});
    object.players.push({token: "54111929746", team: "None"});

    return object;
}

function doTestGame() {
    var xmlHttp = new XMLHttpRequest();
    var gameId;
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            gameId = JSON.parse(xmlHttp.responseText).gameId;

            if (gameId.hasOwnProperty("gameID")) {
                console.log(gameId);
            } else {
                console.log("ERROR");
            }
        }
    };
    xmlHttp.open("POST", postUrl, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send(JSON.stringify(createTestJSONData()));
}