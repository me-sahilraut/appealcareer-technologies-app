import React from "react"

import Header from "./component/Header";
import JobListing from "./component/JobListing";

import './App.css';
import { Provider } from "react-redux";
import Store from "./store/Store";

import ReactDOM from 'react-dom/client';
import './index.css';


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HomePage from "./component/HomePage";

const AppLayout = () => {

  return (
    <div className="">
      <Provider store={Store}>
        <HomePage />
        <Outlet />
      </Provider>
    </div>
  );
}
const appRouter = createBrowserRouter([


  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/jobListing",
        element: <JobListing />,
      }
    ],
  },

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);



