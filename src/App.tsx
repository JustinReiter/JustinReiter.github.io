import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Alert } from '@mui/material';

import './App.css';
import Header from './views/components/header';

function App() {
  return (
    <div className="App-body">
      <div className='App-header'>
        {/* <Alert icon={false} severity="success">
          I am currently in search of new grad SWE positions beginning Spring 2023!
        </Alert> */}
          <Outlet />
      </div>
    </div>
  );
}

export default App;
