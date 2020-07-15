// Main function for reading output of matchup creation, creating games, and outputting matchups with game ids
function readStatsExcel() {
    var file = document.getElementById("excelStatsUploadInput").files[0];

    // Check to make sure input file given
    if (noInputFileCheck(file)) {
        return CreateError("GameStatsDiv", "GameStatsError: No input file detected.");
    }

    var reader = new FileReader();

    console.log("Starting file read... Too lazy for more output so this is all you get.");

    reader.onload = function(e) {
        let data = new Uint8Array(e.target.result);
        let wb = XLSX.read(data,{type:'array'});

        // Initialize values for workbook
        let finalWb = XLSX.utils.book_new();
        finalWb.Props = {
            Title: "Lynx-101st PR Stats",
            Subject: "Game Stats",
            Author: "Justin Reiter",
            CreatedDate: new Date()
        };

        // Get games from all sheets (1 season per sheet)
        let ranking = new Map();
        for (let i = 0; i < wb.SheetNames.length; i++) {
            let sheet = wb.Sheets[wb.SheetNames[i]];

            // Get {name : {player, wins, losses, seasonsPlayed, seasonsPlayedInA}}
            convertStatsExcelToObject(sheet, ranking);
        }

        console.log(`Size of rankings: ${ranking.size}`);

        // Analyze games (finalWb will get sheets added in the function
        analyzeRankings(finalWb, ranking);

        // Convert and download final output
        saveWorkbook(finalWb);
    };
    reader.readAsArrayBuffer(file);
}

// Creates object containing each team matchups [[team1, team2, games : [p1, p2], ...]
function convertStatsExcelToObject(sheet, ranking) {
    var range = XLSX.utils.decode_range(sheet['!ref']);

    // Convert excel entries to an object
    let isDivisionA;
    console.log(`Size: ${range.s.r} to ${range.e.r}`);
    for (var R = range.s.r; R < range.e.r; R++) {
        let val = String(sheet[XLSX.utils.encode_cell({c:0, r:R})].v);
        if (val.includes("Division")) {
            isDivisionA = val === "Division A";
        } else {
            let player = sheet[XLSX.utils.encode_cell({c:1, r:R})].v;

            if (player === "NA" || !player) {
                continue;
            }

            let wins = sheet[XLSX.utils.encode_cell({c:2, r:R})].v;
            let losses = sheet[XLSX.utils.encode_cell({c:3, r:R})].v;

            if (!ranking.has(player)) {
                ranking.set(player, createPlayerObject());
            }

            ranking.get(player).winCount += Number(wins);
            ranking.get(player).lossCount += Number(losses);
            ranking.get(player).seasonsPlayed += 1;

            if (isDivisionA) {
                ranking.get(player).winCountInA += Number(wins);
                ranking.get(player).lossCountInA += Number(losses);
                ranking.get(player).seasonsPlayedInA += 1;
            }
        }
    }
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

    saveAs(new Blob([s2ab(wbout)], {type:"application/octet-stream"}), 'Lynx-EaglePRStats.xlsx');
}
