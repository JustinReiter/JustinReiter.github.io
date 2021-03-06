function readRawExcel() {
    var file = document.getElementById("excelUploadInput").files[0];
    if (noInputFileCheck(file)) {
        return CreateError("MatchCreationDiv", "MatchPairCreationError: No input file detected.");
    }
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var wb = XLSX.read(data,{type:'array'});
        var sheet = wb.Sheets[wb.SheetNames[0]];

        // Read inputted excel file and convert to object
        /// team: teamName, players: []
        var teams = convertRawExcelToObject(sheet);

        var matchups = [];
        // Create matchups based on adjacent teams being matched
        for (let i = 0; i < teams.length - 1; i+=2) {
            console.log(teams[i].team + " vs. " + teams[i+1].team);
            matchups.push(createMatchupObject(teams[i].team, teams[i+1].team, matchTeamMembers(teams[i].players, teams[i+1].players)));
        }
        // Convert final results with game matchups to excel file
        convertObjectToMatchupsExcel(matchups);
    };
    reader.readAsArrayBuffer(file);
}

function convertRawExcelToObject(sheet) {
    var teams = [];

    var range = XLSX.utils.decode_range(sheet['!ref']);

    let teamName = "";
    let players = [];
    for (var R = range.s.r; R <= range.e.r + 1; R++) {
        var nameCell = XLSX.utils.encode_cell({c:0, r:R});
        var urlCell = XLSX.utils.encode_cell({c:1, r:R});
        if (R == range.e.r + 1 || (sheet[nameCell] == undefined && sheet[urlCell] == undefined)) {
            teams.push(createTeamObject(teamName, players));
            players = [];
        } else if (sheet[urlCell] == undefined) {
            teamName = sheet[nameCell].v;
        } else {
            players.push(createPlayerObject(sheet[nameCell].v, sheet[urlCell].v));
        }
    }

    return teams;
}

function convertObjectToMatchupsExcel(matchups) {
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "Nations Cup Matchups",
        Subject: "Game Matchups",
        Author: "Justin Reiter",
        CreatedDate: new Date()
    };
    wb.SheetNames.push("Game Matchups");

    var dataArray = [];
    for (let i = 0; i < matchups.length; i++) {
        dataArray.push([matchups[i].team1,,matchups[i].team2]);
        for (let j = 0; j < matchups[i].games.length; j++) {
            dataArray.push([matchups[i].games[j][0].name, matchups[i].games[j][0].playerId, matchups[i].games[j][1].name, matchups[i].games[j][1].playerId]);
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
