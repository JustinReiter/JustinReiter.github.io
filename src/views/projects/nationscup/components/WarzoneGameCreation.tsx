import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import readXlsxFile from 'read-excel-file';
import writeXlsxFile from 'write-excel-file';
import { NC_TEAM_MAPPING } from '../../../../data';
const viewGameUrl = "https://www.warzone.com/MultiPlayer?GameID=";

interface Player {
  name: string;
  token: string;
}

interface GameMatchup {
  p1: Player;
  p2: Player;
  link: string;
}

interface TeamMatchup {
  team1: string;
  team2: string;
  games: GameMatchup[];
}

const parseRowsToObject = (rows: any[]): TeamMatchup[] => {
  const matchups : TeamMatchup[] = [];
  let newMatchup = {} as TeamMatchup;

  for (const row of rows) {
    if (!row[0]) {
      // empty row... create new team matchup
      matchups.push(newMatchup);
      newMatchup = {} as TeamMatchup;
    } else if (!row[1]) {
      // Team declaration row
      newMatchup.team1 = row[0];
      newMatchup.team2 = row[2];
      newMatchup.games = [];
    } else {
      // Game matchup declaration row
      newMatchup.games.push({
        p1: {
          name: row[0],
          token: row[1]
        },
        p2: {
          name: row[2],
          token: row[3]
        },
        link: ''
      });
    }
  }

  return matchups;
}

interface RequestPlayer {
  token: string;
  team: string;
}

interface Request {
  hostEmail: string;
  hostAPIToken: string;
  templateID: string;
  gameName: string;
  personalMessage: string;
  players: RequestPlayer[];
}

// Converts game details in packed object
const createJSONData = (game: GameMatchup, team1: string, team2: string, email: string, token: string, template: string) => {
  const obj = {} as Request;
  
  obj.hostEmail = email;
  obj.hostAPIToken = token.replace(/\\&/g, "\\&");
  obj.templateID = template;

  obj.gameName = `Nations' Cup 2021 - ${team1} vs. ${team2}`;
  obj.personalMessage = `This game is a part of the Nations' Cup, run by Rento (https://docs.google.com/spreadsheets/d/1aIf2fmJF3saG5JKaRF9bgncvlmJ8WpwIntCzGFflXSk/edit?usp=sharing). \n\nMatch is between:\n\t${game.p1.name} in ${team1}"\n\t"${game.p2.name} in ${team2}`;

  obj.players = [
    {token: game.p1.token.substr(game.p1.token.indexOf("=") + 1), team: NC_TEAM_MAPPING[team1] || "100"},
    {token: game.p2.token.substr(game.p2.token.indexOf("=") + 1), team: NC_TEAM_MAPPING[team2] || "100"}
  ];

  return obj;
};

const createWZGame = async (req: Request): Promise<any> => {
  console.log(`Creating game with the following parameters:\n${JSON.stringify(req, null, 4)}`);
  return {
    error: "createGame has not been implemented yet and no game has been created"
  };
};

const writeObjectToSheet = async (matchups: TeamMatchup[]) => {
  const rows = [];

  for (const matchup of matchups) {
    rows.push([
      {value: matchup.team1},
      {value: ''},
      {value: matchup.team2}
    ]);

    for (const game of matchup.games) {
      rows.push([
        {value: game.p1.name},
        {value: game.p1.token},
        {value: game.p2.name},
        {value: game.p2.token},
        {value: game.link},
      ])
    }

    rows.push([{value: ''}]);
  }

  await writeXlsxFile(rows, {fileName: "NationsCupGames.xlsx"});
};

const createGames = async (email: string, token: string, template: string, file: File, isDryRun: boolean) => {
  // Step 1: parse input sheet into rows of data
  const inputRows = await readXlsxFile(file);
  console.log(`The following parameters will be used:\nEmail: ${email}\nToken: ${token}\nTemplate: ${template}\nIs Dry-Run? ${isDryRun}`);

  // Step 2: parse rows of data into an object with team matchups
  const matchups = parseRowsToObject(inputRows);

  // Step 3: create games
  try {
    for (const matchup of matchups) {
      console.log("TEAM - " + matchup.team1 + " vs. " + matchup.team2);
  
      for (const game of matchup.games) {
        let response;
        if (isDryRun) {
          console.log(`Creating game with the following parameters:\n${JSON.stringify(createJSONData(game, matchup.team1, matchup.team2, email, token, template), null, 4)}`);
          response = {
            error: "isDryRun set to true... No game created as a result"
          };
        } else {
          response = await createWZGame(createJSONData(game, matchup.team1, matchup.team2, email, token, template));
        }

        if (response.gameID) {
          // Game succesfully created
          console.log("\t" + response.gameID + " - " + game.p1.name + " vs. " + game.p2.name);
          game.link = viewGameUrl+response.gameID;
        } else {
          // Game not created successfully
          console.log("\tERROR - " + response.error + " - " + game.p1.name + " + " + game.p2.name);
          game.link = "ERROR - " + response.error;
        }
      }
    }
  } catch (err) {
    console.log(`Encountered an error while creating games... Quitting and outputting current data.\nError: ${err}`);
  }

  // Step 4: write resulting object to sheet
  await writeObjectToSheet(matchups);
};

const WarzoneGameCreation = () => {
  const [isDryRun, setIsDryRun] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [template, setTemplate] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };
  const handleDryRunToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDryRun(event.target.checked);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>, setField: React.Dispatch<React.SetStateAction<string>>) => {
    setField(event.target.value);
  };

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
      return;
    } else if (!token) {
      alert("Please enter your WZ API Token");
      return;
    } else if (!template || !Number(template)) {
      alert("Please enter a template ID");
      return;
    } else if (!file || !file.name.includes(".xlsx")) {
      alert("Please enter a valid Excel (xlsx) file");
      return;
    }

    // All good to go
    setLoading(true);
  };

  useEffect(() => {
    if (loading && file) {
      // loading triggers the game creation
      createGames(email, token, template, file, isDryRun).then(() => {
        // Reset all parameters and enable fields once completed
        setEmail('');
        setToken('');
        setTemplate('');
        setFile(null);
        setIsDryRun(true);
        setLoading(false);
      });
    }

  }, [loading]);

  return (
    <Box sx={{pt: 1}}>
      <Typography variant="h5" component="div">
        Warzone Game Creation Tab
      </Typography>
      <Typography variant="body1" gutterBottom component="div">
        This tab is used to create the Warzone games from the output that is created from the 'Match-up Schedule Creation Tab'. The Warzone API requires your API Token and Warzone Email. The console (ctrl + shift + i) will show progress as the script runs. Note: due to the slowness in the API and lack of batching, the script will take time to run (couple minutes).
      </Typography>

      <FormGroup sx={{pt:2, pl: 2, display: 'flex', alignItems: 'flex-start', gap: 2}}>
        <Typography gutterBottom variant="h5" component="div">
          Input Form
        </Typography>

        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, flexWrap: 'wrap'}}>
          <TextField
            id="email-input"
            required
            label="WZ Email"
            value={email}
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTextChange(event, setEmail)}
            disabled={loading}
          />
          <TextField
            id="token-input"
            required
            label="API Token"
            value={token}
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTextChange(event, setToken)}
            disabled={loading}
          />
          <TextField
            id="token-input"
            required
            label="Template ID"
            value={template}
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTextChange(event, setTemplate)}
            disabled={loading}
          />
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, pl:1, flexWrap: 'wrap'}}>
          <FormControlLabel control={<Checkbox checked={isDryRun} onChange={handleDryRunToggle}/>} label="Dry-run?" disabled={loading}/>
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
          {loading ? <CircularProgress /> : "Create Games!"}
        </Button>
      </FormGroup>
      </Box>
  );
};

export default WarzoneGameCreation;
