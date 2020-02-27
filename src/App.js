import React from 'react';
import Head from "./components/Header/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/home";
import Questions from "./components/FAQ/faq";

const App = () => {
  return (
    <Router>
      <Head/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/faq' component={Questions}/>
    </Router>
  );
};

export default App;
