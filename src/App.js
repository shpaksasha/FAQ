import React from 'react';
import Head from "./components/Header/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home/home';
import Questions from './components/FAQ/questions';
import One from './components/Article/state_1';
import Article from './components/Article/article';
import News from "./components/Card/card";
import Content from "./components/Content/content";


const App = () =>{
    return (
        <Router>
            <Head/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/faq' component={Questions}/>
            <Route exact path='/card' component={News}/>
            <Route exact path='/content' component={Content}/>
            {/*<Route exact path='/faq/article_1' component={One}/>*/}
            <Route exact path="/faq/article/:id" render={(props) => <Article {...props} />}/>
        </Router>
    );
};

export default App;
