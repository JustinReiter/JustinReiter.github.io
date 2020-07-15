// [{team1, team2, players: [[p1, p2, winner], []]}]

function analyzeRankings(wb, rankings) {

    // Sort map of players according to win rate
    let sortedWinRateArr = new Map([...rankings.entries()].sort((a, b) => {
        return Number((a[1].winCount + a[1].lossCount) ? Number(a[1].winRate) : 0) < Number((b[1].winCount + b[1].lossCount) ? Number(b[1].winRate) : 0) ? 1 : -1;
    }));

    // Sheet for top win rate
    let rowData = [["Rank", "Player Name", "Wins", "Losses", "Games", "Win Rate", "Seasons Played", "Seasons Played in A"]];
    let rankCounter = 1;
    for (const [k, v] of sortedWinRateArr.entries()) {
        rowData.push([rankCounter++, k, v.winCount, v.lossCount, v.winCount + v.lossCount, (v.winCount + v.lossCount) ? Number(v.winRate) : 0, v.seasonsPlayed, v.seasonsPlayedInA]);
    }
    addNewSheet(wb, "Top Win Rate", rowData);

    // Sheet for top win count
    rowData.length = 1;
    rankCounter = 1;
    let sortedWinCountArr = new Map([...rankings.entries()].sort((a, b) => {
        return a[1].winCount < b[1].winCount ? 1 : -1;
    }));
    for (const [k, v] of sortedWinCountArr.entries()) {
        rowData.push([rankCounter++, k, v.winCount, v.lossCount, v.winCount + v.lossCount, (v.winCount + v.lossCount) ? Number(v.winRate) : 0, v.seasonsPlayed, v.seasonsPlayedInA]);
    }
    addNewSheet(wb, "Top Win Count", rowData);


    // Sheet for top win rate in A
    rowData = [["Rank", "Player Name", "Wins in A", "Losses in A", "Games in A", "Win Rate in A", "Seasons Played", "Seasons Played in A"]];
    rankCounter = 1;
    let sortedWinRateInAArr = new Map([...rankings.entries()].sort((a, b) => {
        return Number((a[1].winCountInA + a[1].lossCountInA) ? Number(a[1].winRateInA) : 0) < Number((b[1].winCountInA + b[1].lossCountInA) ? Number(b[1].winRateInA) : 0) ? 1 : -1;
    }));
    for (const [k, v] of sortedWinRateInAArr.entries()) {
        if (v.seasonsPlayedInA !== 0) {
            rowData.push([rankCounter++, k, v.winCountInA, v.lossCountInA, v.winCountInA + v.lossCountInA, (v.winCountInA + v.lossCountInA) ? Number(v.winRateInA) : 0, v.seasonsPlayed, v.seasonsPlayedInA]);
        }
    }
    addNewSheet(wb, "Top Win Rate in A", rowData);

    // Sheet for top win count
    rowData.length = 1;
    rankCounter = 1;
    let sortedWinCountInAArr = new Map([...rankings.entries()].sort((a, b) => {
        return a[1].winCountInA < b[1].winCountInA ? 1 : -1;
    }));
    for (const [k, v] of sortedWinCountInAArr.entries()) {
        if (v.seasonsPlayedInA !== 0) {
            rowData.push([rankCounter++, k, v.winCountInA, v.lossCountInA, v.winCountInA + v.lossCountInA, (v.winCountInA + v.lossCountInA) ? Number(v.winRateInA) : 0, v.seasonsPlayed, v.seasonsPlayedInA]);
        }
    }
    addNewSheet(wb, "Top Win Count in A", rowData);
}



// Add new sheet to workbook
function addNewSheet(wb, sheetName, dataArray) {
    wb.SheetNames.push(sheetName);
    var ws = XLSX.utils.aoa_to_sheet(dataArray);
    wb.Sheets[sheetName] = ws;
}