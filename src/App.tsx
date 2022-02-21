import React from 'react';
import { Outlet } from 'react-router-dom';
import { Alert } from '@mui/material';

import Header from './views/components/header';
import './App.css';

function App() {
  return (
    <div className="App-body">
      <Header />
      <div className='App-header'>
        <Alert icon={false} severity="success">
          I am currently in search for a co-op position for Sep 2022 - Dec 2022
        </Alert>
        <div className='App-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
