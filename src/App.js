import React from 'react';
import Head from "./components/Header/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home/home';
import Questions from './components/FAQ/faq';
import One from './components/Article/article_1';
import Two from './components/Article/article_2';

const App = () => {
  return (
    <Router>
      <Head/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/faq' component={Questions}/>
      <Route exact path='/faq/article_1' component={One}/>
      <Route exact path='/faq/article_2' component={Two}/>
    </Router>
  );
};

export default App;
