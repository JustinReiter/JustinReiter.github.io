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
        {/* <Alert icon={false} severity="success">
          I am currently in search of new grad SWE positions beginning Spring 2023!
        </Alert> */}
        <div className='App-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
