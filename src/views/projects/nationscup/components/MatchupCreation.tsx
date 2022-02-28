import React, {useEffect, useState} from 'react';

import {
  Box,
  Button,
  CircularProgress,
  FormGroup,
  FormControlLabel,
  Typography,
} from '@mui/material';

import readXlsxFile from 'read-excel-file';
import writeXlsxFile from 'write-excel-file';


interface Player {
  name: string;
  url: string;
};

interface Team {
  name: string;
  players: Player[];
};

const shuffleArray = (array: Player[]) => {
  // Swap elements in array randomly
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const isNotUniqueMatchup = (team1: Player[], team2: Player[]) => {
  // Check if matchup is unique (ie. players do not face the same opponent
  let seenNames : {[key: string]: string[]} = {};
  for (let i = 0; i < team1.length; i++) {
      // If not unique, return true, else add match to seenNames
      if (team1[i].url in seenNames && seenNames[team1[i].url].includes(team2[i].url)) {
          return true;
      } else if (!(team1[i].url in seenNames)) {
          seenNames[team1[i].url] = [team2[i].url];
      } else {
          seenNames[team1[i].url].push(team2[i].url);
      }
  }
  return false;
};

const matchTeamMembers = (team1: Player[], team2: Player[]) => {
   // Create game matchups
   let extendedTeam1 = [];
   let extendedTeam2 = [];

   // Populate final matchup arrays
   for (let i = 0; i < team1.length * 2; i++) {
       extendedTeam1.push(team1[i % team1.length]);
   }
   for (let i = 0; i < team2.length * 2; i++) {
       extendedTeam2.push(team2[i % team2.length]);
   }

   // Include the first two players in team if # of players in team is 5
   if (extendedTeam1.length === 10) {
       extendedTeam1.push(team1[0]);
       extendedTeam1.push(team1[1]);
   }
   if (extendedTeam2.length === 10) {
       extendedTeam2.push(team2[0]);
       extendedTeam2.push(team2[1]);
   }

   // Fill leftover slots if # of players in team is 4
   if (extendedTeam1.length === 8) {
       for (let i = 0; i < team1.length; i++) {
           extendedTeam1.push(team1[i]);
       }
   }
   if (extendedTeam2.length === 8) {
       for (let i = 0; i < team2.length; i++) {
           extendedTeam2.push(team2[i]);
       }
   }

   // Shuffle array until unique matchup... Only shuffle for a max of 1000 acceptable collisions
   let nonUniqueMatchups = -1;
   do {
       nonUniqueMatchups++;
       shuffleArray(extendedTeam1);
       shuffleArray(extendedTeam2);
   } while (isNotUniqueMatchup(extendedTeam1, extendedTeam2) && nonUniqueMatchups < 1000);

   if (isNotUniqueMatchup(extendedTeam1, extendedTeam2) && nonUniqueMatchups === 1000) {
       console.log("\tUnresolved matchup collision");
   } else {
       console.log("\tNumber of non-unique arrangements before a success: " + nonUniqueMatchups);
   }

   const gameMatchups : Player[][] = [];
   for (let i = 0; i < 12; i++) {
    gameMatchups.push([extendedTeam1[i], extendedTeam2[i]]);
   }

   return gameMatchups;
};


const processMatchups = async (file: File) => {
  const inputRows = await readXlsxFile(file);
  
  // Parse rows and create teams list
  const teams: Team[] = [];
  let team : Team = {name: '', players: []};
  for (const row of inputRows) {
    if (!row[0] && team.name) {
      // Team is completed... Save it
      teams.push(team);
    } else if (!row[1]) {
      team = {name: row[0].toString(), players: []};
    } else {
      team.players.push({name: row[0].toString(), url: row[1].toString()});
    }
  }
  if (team.name) {
    // Team is completed... Save it
    teams.push(team);
  }

  // Second part, create the matchups
  var matchups: any[][] = [];
  // Create matchups based on adjacent teams being matched
  for (let i = 0; i < teams.length - 1; i+=2) {
    console.log(teams[i].name + " vs. " + teams[i+1].name);
    matchups.push([{value: teams[i].name}, {value: ''}, {value: teams[i+1].name}]);
    for (const row of matchTeamMembers(teams[i].players, teams[i+1].players)) {
      matchups.push([{value: row[0].name}, {value: row[0].url}, {value: row[1].name}, {value: row[1].url}]);
    }
    matchups.push([{value: ''}]);
  }
  
  // Third part, write to output
  await writeXlsxFile(matchups, {fileName: "NationsCupMatchups.xlsx"});
};

const MatchupCreation = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = () => {
    if (!file || !file.name.includes(".xlsx")) {
      alert("Please enter a valid Excel (xlsx) file");
      return;
    }

    // All good to go
    setLoading(true);
  };

  useEffect(() => {
    if (loading && file) {
      // loading triggers the game creation
      processMatchups(file).then(() => {
        setFile(null);
        setLoading(false);
      });
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Box sx={{pt: 1}}>
      <Typography variant="h5" component="div">
        Match-up Schedule Creation Tab
      </Typography>
      <Typography variant="body1" gutterBottom component="div">
        This tab is used to create the match-ups between teams. Teams will be created such that players are randomly matched against opponents (while maintaining the invariant that players cannot have duplicate match-ups against the same player). If fewer than 6 players are on a team, than the first player in a team will be considered the player to get an extra game.
      </Typography>

      <FormGroup sx={{pt:2, pl: 2, display: 'flex', alignItems: 'flex-start', gap: 2}}>
        <Typography gutterBottom variant="h5" component="div">
          Input Form
        </Typography>

        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, pl:1}}>
          <FormControlLabel label={file ? `Selected file: '${file.name}'` : 'No file selected'}
            control={
              <Button
                variant="contained"
                component="label"
                sx={{mr: 1}}
                disabled={loading}
              >
                Upload File
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  disabled={loading}
                />
              </Button>
            }
          />
        </Box>
  
        <Button
          variant="contained" 
          component="label"
          onClick={handleSubmit}
          sx={{mt: 2}}
          disabled={loading}
        >
          {loading ? <CircularProgress /> : "Create Match-ups!"}
        </Button>
      </FormGroup>
    </Box>
  );
};

export default MatchupCreation;