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
import WhoWeAre from "./component/aboutUs/WhoWeAre";
import LeadershipTeam from "./component/aboutUs/LeadershipTeam";
import StrategicAdvisor from "./component/aboutUs/StrategicAdvisor";
import Footer from "./component/Footer";
import Service from "./component/Service";
import Expertise from "./component/Expertise";
import GetInTouch from "./component/GetInTouch";


const AppLayout = () => {

  return (
    <div className="">
      <Provider store={Store}>
        <HomePage />
        <Outlet />
        <Footer />
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
        path: "/service",
        element: <Service />,
      },
      {
        path: "/expertise",
        element: <Expertise />,
      },
      {
        path: "/getInTouch",
        element: <GetInTouch />,
      },
      {
        path: "/jobListing",
        element: <JobListing />,
      },
      {
        path: "/whoWeAre",
        element: <WhoWeAre />,
      },
      {
        path: "/leadershipTeam",
        element: <LeadershipTeam />
      },
      // {
      //   path: "/strategicAdvisor",
      //   element: <StrategicAdvisor />
      // }
    ],
  },

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);



