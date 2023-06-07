import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Nav from "./Nav";
import Battle from "./Battle";
import Home from "./Home";
import Popular from "./Popular";
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <ErrorPage />,
    children: [
      {
          path: "/",
          element: <Home />,
        },
        {
          path: "/popular",
          element: <Popular />,
        },
        {
          path: "/battle",
          element: <Battle />,
        },
    ],
  },
        
  ]
)
const App = () => {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
    )
}

export default App;
