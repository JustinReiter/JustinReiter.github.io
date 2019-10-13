// https://cdnjs.cloudflare.com/ajax/libs/exceljs/2.0.1/exceljs.min.js
// <input type="file" id="files" name="files[]" multiple />

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function isNotUniqueMatchup(team1, team2) {
    let seenNames = new Map();
    for (let i = 0; i < team1.length; i++) {
        if (team1[i].playerId in seenNames && seenNames[team1[i].playerId].includes(team2[i].playerId)) {
            return true;
        } else if (!(team1[i].playerId in seenNames)) {
            seenNames[team1[i].playerId] = [team2[i].playerId];
        } else {
            seenNames[team1[i].playerId].push(team2[i].playerId);
        }
    }
    return false;
}

function matchTeamMembers(team1, team2) {
    var extendedTeam1 = [];
    var extendedTeam2 = [];

    var matchedPlayers = new Map();

    for (let i = 0; i < team1.length * 2; i++) {
        extendedTeam1.push(team1[i % team1.length]);
    }
    for (let i = 0; i < team2.length * 2; i++) {
        extendedTeam2.push(team2[i % team2.length]);
    }

    while (extendedTeam1.length < 12) {
        let val = Math.floor(Math.random() * team1.length);
        if (val >= team1.length) {
            continue;
        }
        if (!(team1[val].playerId in matchedPlayers)) {
            matchedPlayers[team1[val].playerId] = true;
            extendedTeam1.push(team1[val]);
        }
    }
    while (extendedTeam2.length < 12) {
        let val = Math.floor(Math.random() * team2.length);
        if (val >= team2.length) {
            continue;
        }
        if (!(team2[val].playerId in matchedPlayers)) {
            matchedPlayers[team2[val].playerId] = true;
            extendedTeam2.push(team2[val]);
        }
    }

    let nonUniqueMatchups = -1;
    do {
        nonUniqueMatchups++;
        shuffleArray(extendedTeam1);
        shuffleArray(extendedTeam2);
    } while (isNotUniqueMatchup(extendedTeam1, extendedTeam2) && nonUniqueMatchups < 1000);

    if (isNotUniqueMatchup(extendedTeam1, extendedTeam2) && nonUniqueMatchups == 1000) {
        console.log("Unresolved matchup collision");
    } else {
        console.log("Number of non-unique arrangements: " + nonUniqueMatchups);
    }

    var gameMatchups = [];
    for (let i = 0; i < 12; i++) {
        gameMatchups.push(createPlayerMatchUp(extendedTeam1[i], extendedTeam2[i]));
    }

    return gameMatchups;
}