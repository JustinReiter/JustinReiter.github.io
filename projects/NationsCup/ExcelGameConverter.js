
function isUpdated(matchups) {
    for (let i = 0; i < matchups.length; i++) {
        for (let j = 0; j < matchups[i].games.length; j++) {
            if (matchups[i].games[j].length != 3) {
                return false;
            }
        }
    }
    return true;
}

function timeOutFunction(matchups) {
    if (isUpdated(matchups)) {
        return;
    } else {
        setTimeout(timeOutFunction, 5000, matchups);
    }
}

// Main function for reading output of matchup creation, creating games, and outputting matchups with game ids
function readMatchupsExcel() {
    var file = document.getElementById("excelUploadInput").files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var wb = XLSX.read(data,{type:'array'});
        var sheet = wb.Sheets[wb.SheetNames[0]];

        // Get [[team1, team2, games : [p1, p2, gameurl], ...]
        var matchups = convertMatchupsExcelToObject(sheet);

        for (let i = 0; i < matchups.length; i++) {
            console.log(matchups[i].team1 + " vs. " + matchups[i].team2);

            for (let j = 0; j < matchups[i].games.length; j++) {
                createGame(matchups[i].games[j], matchups[i].team1, matchups[i].team2);
            }
        }

        setTimeout(timeOutFunction, 5000, matchups);
        // Convert and download final output
        convertObjectToGamesExcel(matchups);
    };
    reader.readAsArrayBuffer(file);
}

function createMatchupObject(teamName1, teamName2, matchups) {
    return {team1: teamName1, team2: teamName2, games: matchups};
}

function createPlayerMatchUp(player1, player2) {
    return [player1, player2];
}

function createPlayerObject(_name, _playerId) {
    return {name: _name, playerId: _playerId};
}

// Creates object containing each team matchups [[team1, team2, games : [p1, p2, gameurl], ...]
function convertMatchupsExcelToObject(sheet) {
    var teams = [];

    var range = XLSX.utils.decode_range(sheet['!ref']);

    var matchups = [];
    for (var R = range.s.r; R <= range.e.r + 1; R+=14) {
        var team1 = sheet[XLSX.utils.encode_cell({c:0, r:R})];
        var team2 = sheet[XLSX.utils.encode_cell({c:3, r:R})];
        var games = [];

        for (let i = 1; i < 13; i++) {
            var player1 = createPlayerObject(sheet[XLSX.utils.encode_cell({c:0, r:R+i})], sheet[XLSX.utils.encode_cell({c:1, r:R+i})]);
            var player2 = createPlayerObject(sheet[XLSX.utils.encode_cell({c:2, r:R+i})], sheet[XLSX.utils.encode_cell({c:3, r:R+i})]);
            games.push(createPlayerMatchUp(player1, player2));
        }
        matchups.push(createMatchupObject(team1, team2, games));
    }

    return matchups;
}

// Convert matchups object ([team1, team2, games : [p1, p2, gameurl]]) to excel after game creation
function convertObjectToGamesExcel(matchups) {
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "Nations Cup Games",
        Subject: "Game Matchups",
        Author: "Justin Reiter",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("Game Matchups");

    var dataArray = [];
    for (let i = 0; i < matchups.length; i++) {
        dataArray.push([matchups[i].team1,,matchups[i].team2]);
        for (let j = 0; j < matchups[i].games.length; j++) {
            dataArray.push([matchups[i].games[j][0].name, matchups[i].games[j][0].playerId, matchups[i].games[j][1].name, matchups[i].games[j][1].playerId, matchups[i].games[j][2]]);
        }
        dataArray.push([]);
    }

    var ws = XLSX.utils.aoa_to_sheet(dataArray);
    wb.Sheets["Game Matchups"] = ws;

    var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});

    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    }

    saveAs(new Blob([s2ab(wbout)], {type:"application/octet-stream"}), 'NationsCupMatchups.xlsx');
}