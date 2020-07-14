function createPlayerObject(_name, _playerId) {
    return {name: _name, playerId: _playerId};
}

function createPlayerMatchUp(player1, player2) {
    return [player1, player2];
}

function createStatsPlayerMatchUp(player1, player2, winner) {
    return [player1, player2, winner];
}

function createMatchupObject(teamName1, teamName2, matchups) {
    return {team1: teamName1, team2: teamName2, games: matchups};
}

function createTeamObject(teamName, players) {
    return {team: teamName, players: players};
}