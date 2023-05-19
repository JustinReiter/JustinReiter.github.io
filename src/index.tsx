import React from 'react';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import Home from './views/home';
import Education from './views/education';
import WorkExperience from './views/experience';
import Projects from './views/projects';
import NationsCup from './views/projects/nationscup';
import reportWebVitals from './reportWebVitals';

const domNode = document.getElementById('root');
if (domNode == null) {
  // Should never happen
  throw 'root node not found';
}

const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={
            <>
              <Home />
              <Education />
              <WorkExperience />
              <Projects />
              <div style={{scrollSnapAlign: "end", paddingTop: "24px"}}></div>
            </>
          }/>
          {/* <Route path='education' element={<Education />} />
          <Route path='experience' element={<WorkExperience />} />
          <Route path='projects' element={<Projects />} /> */}
          <Route path='projects/nc' element={<NationsCup />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
