// [{team1, team2, players: [[p1, p2, winner], []]}]

function AnalyzeMatchups(matches) {
    let map = new Map();
    for (let i = 0; i < matches.length; i++) {
        for (let j = 0; j < matches[i].games.length; j++) {
            if (!map.has(matches[i].games[j][0].playerId)) {
                map.set(matches[i].games[j][0].playerId, createPlayerStatObj(matches[i].games[j][0].name, matches[i].team1, 0, 0));
            }
            if (!map.has(matches[i].games[j][1].playerId)) {
                map.set(matches[i].games[j][1].playerId, createPlayerStatObj(matches[i].games[j][1].name, matches[i].team2, 0, 0));
            }
            map.get(matches[i].games[j][0].playerId).gameCount++;
            map.get(matches[i].games[j][1].playerId).gameCount++;
            map.get(matches[i].games[j][2]).winCount++;
        }
    }

    let sortedWinRateArr = new Map([...map.entries()].sort((a, b) => {
        return Number(a[1].winRate()) > Number(b[1].winRate()) ? 1 : -1;
    }));

    let sortedWinCountArr = new Map([...map.entries()].sort((a, b) => {
        return a[1].winCount > b[1].winCount ? 1 : -1;
    }));
}

function createPlayerStatObj(name, team, winCount, gameCount) {
    return {name: name, team: team, winCount: winCount, gameCount: gameCount, winRate() {(this.winCount / this.gameCount).toFixed(4)}};
}