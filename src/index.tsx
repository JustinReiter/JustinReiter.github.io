import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './views/homepage';

const domNode = document.getElementById('root');
if (domNode == null) {
  // Should never happen
  throw 'root node not found';
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

const root = createRoot(domNode);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
