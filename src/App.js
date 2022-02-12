import React, {Fragment} from 'react';
import Header from './pages/Header/header';
import {Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Questions from './pages/FAQ/questions';
import Article from './components/Article/article';
import News from './components/Card/card';
import Content from './components/Content/content';


const App = () => {
    return (
        <Fragment>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/faq' component={Questions}/>
            <Route exact path='/football' component={News}/>
            <Route exact path='/content' component={Content}/>
            <Route exact path="/faq/article/:id" render={(props) => <Article {...props} />}/>
        </Fragment>
    );
};


export default App
