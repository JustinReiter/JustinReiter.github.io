import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    FormControlLabel,
    FormGroup,
    Typography,
} from '@mui/material';

const processStats = async (file: File) => {
    console.log(`Processing: ${file.name}`);
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
