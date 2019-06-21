import React from 'react';
import dotenv from 'dotenv';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './components/header';
import ListPage from './page/listPage';
import LoginPage from './page/loginPage';
import SignUpPage from './page/signUpPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    dotenv.config();
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route path='/product' component={ListPage}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/signup' component={SignUpPage}/>
                </div>
            </Router>
    );
}

export default App;
