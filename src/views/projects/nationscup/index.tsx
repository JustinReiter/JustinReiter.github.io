import React, {useState} from 'react';

import {
  Card,
  Container,
  Tabs,
  Tab,
  Typography,
} from '@mui/material';

import MatchupCreation from './components/MatchupCreation';
import WarzoneGameCreation from './components/WarzoneGameCreation';

const NationsCup = () => {
  const [tabSelected, setTabSelected] = useState<Number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabSelected(newValue);
  };


  return (
    <Container maxWidth='lg'>
      <Typography variant="h3" component="div">
        Nations Cup
      </Typography>
      <Card sx={{mt: 2, p: 1}}>
        <Tabs value={tabSelected} onChange={handleTabChange}>
          <Tab label="Match-up Schedule Creation" />
          <Tab label="Warzone Game Creation" />
        </Tabs>
        {tabSelected === 0 && <MatchupCreation/>}
        {tabSelected === 1 && <WarzoneGameCreation/>}
      </Card>
    </Container>
  );
};

export default NationsCup;
