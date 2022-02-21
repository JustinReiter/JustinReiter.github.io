import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './views/home';
import Education from './views/education';
import WorkExperience from './views/experience';
import Projects from './views/projects';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='education' element={<Education />} />
          <Route path='experience' element={<WorkExperience />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
