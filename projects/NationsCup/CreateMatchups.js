function shuffleArray(array) {
    // Swap elements in array randomly
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function isNotUniqueMatchup(team1, team2) {
    // Check if matchup is unique (ie. players do not face the same opponent
    let seenNames = new Map();
    for (let i = 0; i < team1.length; i++) {
        // If not unique, return true, else add match to seenNames
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
    // Create game matchups
    var extendedTeam1 = [];
    var extendedTeam2 = [];

    // Populate final matchup arrays
    for (let i = 0; i < team1.length * 2; i++) {
        extendedTeam1.push(team1[i % team1.length]);
    }
    for (let i = 0; i < team2.length * 2; i++) {
        extendedTeam2.push(team2[i % team2.length]);
    }

    // Include the first two players in team if # of players in team is 5
    if (extendedTeam1.length == 10) {
        extendedTeam1.push(team1[0]);
        extendedTeam1.push(team1[1]);
    }
    if (extendedTeam2.length == 10) {
        extendedTeam2.push(team2[0]);
        extendedTeam2.push(team2[1]);
    }

    // Fill leftover slots if # of players in team is 4
    for (let i = 0; i < team1.length; i++) {
        extendedTeam1.push(team1[i]);
    }
    for (let i = 0; i < team2.length; i++) {
        extendedTeam2.push(team2[i]);
    }

    // Shuffle array until unique matchup... Only shuffle for a max of 1000 acceptable collisions
    let nonUniqueMatchups = -1;
    do {
        nonUniqueMatchups++;
        shuffleArray(extendedTeam1);
        shuffleArray(extendedTeam2);
    } while (isNotUniqueMatchup(extendedTeam1, extendedTeam2) && nonUniqueMatchups < 1000);

    if (isNotUniqueMatchup(extendedTeam1, extendedTeam2) && nonUniqueMatchups == 1000) {
        console.log("\tUnresolved matchup collision");
    } else {
        console.log("\tNumber of non-unique arrangements before a success: " + nonUniqueMatchups);
    }

    var gameMatchups = [];
    for (let i = 0; i < 12; i++) {
        gameMatchups.push(createPlayerMatchUp(extendedTeam1[i], extendedTeam2[i]));
    }

    return gameMatchups;
}