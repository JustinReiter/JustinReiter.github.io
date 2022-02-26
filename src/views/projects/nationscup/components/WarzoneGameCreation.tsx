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
import React, {useEffect, useState} from 'react';

import readXlsxFile from 'read-excel-file';
import writeXlsxFile from 'write-excel-file';


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
    if (loading) {
      // loading triggers the game creation
      setTimeout(() => setLoading(false), 2000);
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
