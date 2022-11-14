import { Box, Typography, FormGroup, TextField, FormControlLabel, Checkbox, Button, CircularProgress } from "@mui/material";
import _ from "lodash";
import { useState, useEffect } from "react";

import readXlsxFile from "read-excel-file";
import { Cell } from "read-excel-file/types";
import writeXlsxFile, { Row } from "write-excel-file";

const checkGame = async (gameUrl: string, p1Id: string, p2Id: string, email: string, token: string, isDryRun: boolean) => {
  console.log(`The following parameters will be used:\nGame URL: ${gameUrl}\nEmail: ${email}\nToken: ${token}\nIs Dry-Run? ${isDryRun}`);

  return {
    error: "checkGame has not been implemented yet and WZ API was not hit to check game progress"
  };
}

const processGameProgress = async (email: string, token: string, file: File, isDryRun: boolean) => {
  // Step 1: read the input file
  const rows: Cell[][] = await readXlsxFile(file);
  const outputRows = _.cloneDeep(rows) as Row[];

  // Step 2: form the results dictionary
  // let team1 = '';
  // let team2 = '';
  rows.forEach(async (row, idx) => {
    if (row[0] && !row[1]) {
      // new teams
      // team1 = row[0] as string;
      // team2 = row[2] as string;
    } else {
      if (row.length < 6 || row[5] !== "Finished") {

        let response;
        if (isDryRun) {
          console.log(`The following parameters will be used:\nGame URL: ${row[4]}\nEmail: ${email}\nToken: ${token}\nIs Dry-Run? ${isDryRun}`);
          response = {
            error: "isDryRun set to true... No game created as a result"
          };
        } else {
          response = await checkGame(String(row[4]), String(row[1]), String(row[3]), email, token, isDryRun);
        }

        console.log(response);
      }
    }

    for (let i = 0; i < row.length; i++) {
      outputRows[idx][i] = {value: String(row[i])};
    }
  });

  console.log(rows);
  // Step 3: write the results to new excel file
  await writeXlsxFile(outputRows, {fileName: "NationsCupGameReport.xlsx"});
}

const WarzoneGameProgress = () => {
  const [isDryRun, setIsDryRun] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
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
      processGameProgress(email, token, file, isDryRun).finally(() => {
        // Reset all parameters and enable fields once completed
        setEmail('');
        setToken('');
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
      This tab is used to update game progress with the winner (if applicable) of each game in addition to the win condition (etc surrender/boot/etc). The Warzone API requires the WZ email and token.
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
          {loading ? <CircularProgress /> : "Check Progress!"}
        </Button>
      </FormGroup>
      </Box>
  );
};

export default WarzoneGameProgress;
