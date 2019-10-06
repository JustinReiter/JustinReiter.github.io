// https://cdnjs.cloudflare.com/ajax/libs/exceljs/2.0.1/exceljs.min.js
// <input type="file" id="files" name="files[]" multiple />

function createPlayerObject(_name, _playerId) {
    return {name: _name, playerId: _playerId};
}

function createPlayerMatchUp(player1, player2) {
    return [player1, player2];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
        if (!matchedPlayers.has(team1[val].playerId)) {
            matchedPlayers.set(team1[val].playerId, true);
            extendedTeam1.push(team1[val]);
        }
    }
    while (extendedTeam2.length < 12) {
        let val = Math.floor(Math.random() * team2.length);
        if (val >= team2.length) {
            continue;
        }
        if (!matchedPlayers.has(team2[val].playerId)) {
            matchedPlayers.set(team2[val].playerId, true);
            extendedTeam2.push(team2[val]);
        }
    }

    shuffleArray(extendedTeam1);
    shuffleArray(extendedTeam2);

    var gameMatchups = [];
    for (let i = 0; i < 12; i++) {
        gameMatchups.push(createPlayerMatchUp(extendedTeam1[i], extendedTeam2[i]));
    }

    return gameMatchups;
}