import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    FormControlLabel,
    FormGroup,
    Typography,
} from '@mui/material';

import readXlsxFile from 'read-excel-file';
import writeXlsxFile from 'write-excel-file';

interface Player {
  name: string;
  token: string;
  team: string;
  wins: number;
  games: number;
};

const processStats = async (file: File) => {
  // Step 1: parse sheet to object
  const inputRows = await readXlsxFile(file);
  
  // Step 2: form the results dictionary
  let team1: string = '';
  let team2: string = '';
  let results: {[k in string]: Player} = {};
  for (const row of inputRows) {
    if (!row[0]) {
      // empty row
      continue;
    } else if (!row[1]) {
      // new teams
      team1 = row[0] as string;
      team2 = row[2] as string;
    } else {
      if (!results[row[1] as string]) {
        results[row[1] as string] = {
          name: row[0] as string,
          token: row[1] as string,
          wins: 0,
          games: 0,
          team: team1
        };
      }
      if (!results[row[3] as string]) {
        results[row[3] as string] = {
          name: row[2] as string,
          token: row[3] as string,
          wins: 0,
          games: 0,
          team: team2
        };
      }

      results[row[1] as string].games++;
      results[row[3] as string].games++;
      if (row[5] === "Finished") {
        if (row[0] === row[6]) {
          results[row[1] as string].wins++;
        } else {
          results[row[3] as string].wins++;
        }
      }
    }
  }

  // Step 3: create the output rows
  // first sort by win rate
  const winRatePlayers = Object.values(results).sort((a, b) => a.wins / (a.games || 1) < b.wins / (b.games || 1) ? 1 : -1);
  const winRateRows: any[][] = [["Rank", "Player URL", "Player Name", "Team", "Wins", "Games", "Win Rate"]];
  for (let i = 0; i < winRatePlayers.length; i++) {
    winRateRows.push([
      i+1,
      winRatePlayers[i].token,
      winRatePlayers[i].name,
      winRatePlayers[i].team,
      winRatePlayers[i].wins,
      winRatePlayers[i].games,
      winRatePlayers[i].wins / (winRatePlayers[i].games || 1)
    ]);
  }

  // second sort by wins
  const winsPlayers = Object.values(results).sort((a, b) => a.wins < b.wins ? 1 : -1);
  const winsRows: any[][] = [["Rank", "Player URL", "Player Name", "Team", "Wins", "Games", "Win Rate"]];
  for (let i = 0; i < winsPlayers.length; i++) {
    winsRows.push([
      i+1,
      winsPlayers[i].token,
      winsPlayers[i].name,
      winsPlayers[i].team,
      winsPlayers[i].wins,
      winsPlayers[i].games,
      winsPlayers[i].wins / (winsPlayers[i].games || 1)
    ]);
  }

  // third sort by undefeated (then by number of wins)
  const undefeatedPlayers = Object.values(results).filter((e) => e.wins === e.games).sort((a, b) => a.wins < b.wins ? 1 : -1);
  const undefeatedRows: any[][] = [["Rank", "Player URL", "Player Name", "Team", "Wins"]];
  for (let i = 0; i < undefeatedPlayers.length; i++) {
    undefeatedRows.push([
      i+1,
      undefeatedPlayers[i].token,
      undefeatedPlayers[i].name,
      undefeatedPlayers[i].team,
      undefeatedPlayers[i].wins
    ]);
  }

  // Step 4: write to excel
  await writeXlsxFile([winRateRows, winsRows, undefeatedRows], {
    sheets: ["Players by Win Rate", "Players by Wins", "Undefeated Players"],
    fileName: "NationsCupStats.xlsx"
  });
};

const NCStatistics = () => {
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
        processStats(file).then(() => {
          setFile(null);
          setLoading(false);
        });
      }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    return (
        <Box sx={{pt: 1}}>
          <Typography variant="h5" component="div">
            Nations Cup Statistics Tab
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            This tab is used to generate individual player statistics regarding the competition. Player statistics are sorted in by different parameters: top win rate, top win count and by undefeated. Each tab will contain the wins, games and win rate of the players in addition to their player URL, name and team.
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
              {loading ? <CircularProgress /> : "Get Stats!"}
            </Button>
          </FormGroup>
        </Box>
      );
};

export default NCStatistics;
