import React from 'react';
import { Outlet } from 'react-router-dom';

import logo from './logo.svg';
import Header from './views/components/header';
import './App.css';

function App() {
  console.log("render app");
  return (
    <div className="App-body">
      <Header />
      <div className='App-header'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
