import React from 'react';
import Head from "./components/Header/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/home";

const App = () => {
  return (
    <Router>
      <Head/>
      <Route path='/' component={Home}/>
    </Router>
  );
};

export default App;
