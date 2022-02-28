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
import NCStatistics from './components/NCStatistics';

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
        <Tabs value={tabSelected} variant="scrollable" scrollButtons="auto" onChange={handleTabChange}>
          <Tab label="Match-up Schedule Creation" />
          <Tab label="Warzone Game Creation" />
          <Tab label="Nations Cup Statistics" />
        </Tabs>
        {tabSelected === 0 && <MatchupCreation />}
        {tabSelected === 1 && <WarzoneGameCreation />}
        {tabSelected === 2 && <NCStatistics />}
      </Card>
    </Container>
  );
};

export default NationsCup;
