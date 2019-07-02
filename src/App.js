import React, {Component} from 'react';
import dotenv from 'dotenv';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Aside from './components/Admin/aside'
import Header from './components/header';
import ListPage from './page/listPage';
import LoginPage from './page/loginPage';
import SignUpPage from './page/signUpPage';
import Detail from './page/detail';
import Dashboard from './page/dashboard';
import Profile from './page/profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
class App extends Component {
    render(){
        dotenv.config();
        return (
            <Router>
                {! this.props.isAdmin && <div className="App">
                    
                    <Header />
                    <Route exact path='/product/:id' component={Detail}/>
                    <Route exact path='/product' component={ListPage}/>
                    <Route exact path='/' component={ListPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignUpPage}/>
                    <Route exact path='/profile' component={Profile}/>
                </div>}
                <Aside />
                <Route exact path='/dashboard' component={Dashboard}/>
            </Router>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        isAdmin: state.loginReducer.isAdmin
    }
}
export default connect(mapStatetoProps, null)(App);
