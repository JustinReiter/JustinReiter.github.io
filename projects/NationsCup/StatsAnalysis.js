// [{team1, team2, players: [[p1, p2, winner], []]}]

function analyzeMatchups(wb, matches) {
    let map = new Map();

    // Iterates through matches and sets player win/game count
    for (let i = 0; i < matches.length; i++) {
        for (let j = 0; j < matches[i].games.length; j++) {
            // If p1 not in map, initialize values
            if (!map.has(matches[i].games[j][0].playerId)) {
                map.set(matches[i].games[j][0].playerId, createPlayerStatObj(matches[i].games[j][0].name, matches[i].team1, 0, 0));
            }

            // If p2 not in map, initialize values
            if (!map.has(matches[i].games[j][1].playerId)) {
                map.set(matches[i].games[j][1].playerId, createPlayerStatObj(matches[i].games[j][1].name, matches[i].team2, 0, 0));
            }

            // Add game to each player and increase winner's win count
            map.get(matches[i].games[j][0].playerId).gameCount++;
            map.get(matches[i].games[j][1].playerId).gameCount++;
            map.get(matches[i].games[j][2] === matches[i].games[j][0].name ? matches[i].games[j][0].playerId : matches[i].games[j][1].playerId).winCount++;
        }
    }

    // Sort map of players according to win rate
    let sortedWinRateArr = new Map([...map.entries()].sort((a, b) => {
        return Number(a[1].winRate) < Number(b[1].winRate) ? 1 : -1;
    }));

    // Sheet for top win rate
    let rowData = [["Rank", "Player ID", "Player Name", "Team", "Wins", "Games", "Win Rate"]];
    let rankCounter = 1;
    for (const [k, v] of sortedWinRateArr.entries()) {
        rowData.push([rankCounter++, k, v.name, v.team, v.winCount, v.gameCount, Number(v.winRate)]);
    }
    addNewSheet(wb, "Top Win Rate", rowData);

    // Sheet for top win count
    rowData.length = 1;
    rankCounter = 1;
    let sortedWinCountArr = new Map([...map.entries()].sort((a, b) => {
        return a[1].winCount < b[1].winCount ? 1 : -1;
    }));
    for (const [k, v] of sortedWinCountArr.entries()) {
        rowData.push([rankCounter++, k, v.name, v.team, v.winCount, v.gameCount, Number(v.winRate)]);
    }
    addNewSheet(wb, "Top Win Count", rowData);

    // Sheet for undefeated players
    rowData.length = 0;
    rankCounter = 1;
    rowData.push(["Rank", "Player ID", "Player Name", "Team", "Win Count"]);
    for (const [k, v] of sortedWinCountArr.entries()) {
        if (v.winCount == v.gameCount) {
            rowData.push([rankCounter++, k, v.name, v.team, v.winCount]);
        }
    }
    addNewSheet(wb, "Undefeated Players", rowData);
}

function createPlayerStatObj(name, team, winCount, gameCount) {
    return {name: name, team: team, winCount: Number(winCount), gameCount: Number(gameCount), get winRate() {return (this.winCount / this.gameCount).toFixed(4);}};
}

// Add new sheet to workbook
function addNewSheet(wb, sheetName, dataArray) {
    wb.SheetNames.push(sheetName);
    var ws = XLSX.utils.aoa_to_sheet(dataArray);
    wb.Sheets[sheetName] = ws;
}