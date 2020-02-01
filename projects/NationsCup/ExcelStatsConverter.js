// Main function for reading output of matchup creation, creating games, and outputting matchups with game ids
function readStatsExcel() {
    var file = document.getElementById("excelStatsUploadInput").files[0];

    if (noInputFileCheck(file)) {
        return CreateError("GameStatsDiv", "GameStatsError: No input file detected.");
    }

    var reader = new FileReader();

    console.log("Starting file read... Too lazy for more output so this is all you get.");

    reader.onload = function(e) {
        let data = new Uint8Array(e.target.result);
        let wb = XLSX.read(data,{type:'array'});

        let finalWb = XLSX.utils.book_new();
        finalWb.Props = {
            Title: "Nations Cup Stats",
            Subject: "Game Stats",
            Author: "Justin Reiter",
            CreatedDate: new Date()
        };

        let matchups = [];

        for (let i = 0; i < wb.SheetNames.length; i++) {
            let sheet = wb.Sheets[wb.SheetNames[i]];
            // Get [[team1, team2, games : [p1, p2, gameurl], ...]
            matchups.concat(convertStatsExcelToObject(sheet));
        }

        analyzeMatchups(finalWb, matchups);

        // Convert and download final output
        saveWorkbook(finalWb);
    };
    reader.readAsArrayBuffer(file);
}

// Creates object containing each team matchups [[team1, team2, games : [p1, p2], ...]
function convertStatsExcelToObject(sheet) {
    var range = XLSX.utils.decode_range(sheet['!ref']);

    var matchups = [];
    for (var R = range.s.r; R < range.e.r; R+=14) {
        var team1 = sheet[XLSX.utils.encode_cell({c:0, r:R})].v;
        var team2 = sheet[XLSX.utils.encode_cell({c:2, r:R})].v;
        var games = [];

        for (let i = 1; i < 13; i++) {
            var player1 = createPlayerObject(sheet[XLSX.utils.encode_cell({c:0, r:R+i})].v, sheet[XLSX.utils.encode_cell({c:1, r:R+i})].v);
            var player2 = createPlayerObject(sheet[XLSX.utils.encode_cell({c:2, r:R+i})].v, sheet[XLSX.utils.encode_cell({c:3, r:R+i})].v);
            let winner = sheet[XLSX.utils.encode_cell({c:5, r:R+i})].v != "In Progress" ? sheet[XLSX.utils.encode_cell({c:5, r:R+i})].v : -1;
            if (winner != -1) {
                games.push(createStatsPlayerMatchUp(player1, player2, winner));
            }
        }
        matchups.push(createMatchupObject(team1, team2, games));
    }

    return matchups;
}

// Convert matchups object ([team1, team2, games : [p1, p2, gameurl]]) to excel after game creation
function saveWorkbook(wb) {
    var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});

    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    }

    saveAs(new Blob([s2ab(wbout)], {type:"application/octet-stream"}), 'NationsCupStats.xlsx');
}
