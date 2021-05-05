import React from "react";
// import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

//mport axios from 'axios';
//COMPONENTS
import Sidebar from "./components/Sidebar";
import Mainpanel from "./components/Mainpanel";
import "./index.css";

export default function App() {
  return (
    <div className="containerApp">
      <Sidebar />
      <Mainpanel />
    </div>
  );
}
