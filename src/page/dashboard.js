import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../components/Admin/header';
import Aside from '../components/Admin/aside';
import Content from '../components/Admin/content';
import Category from '../components/Admin/Category';
import Table from '../components/Admin/table';
import '../styles/dashboard.css'
class Dashboard extends Component {
    render(){
        return(
            <Router>
            <div className="dashboard">
                <Header />
                <Aside>
                    <Category/>
                </Aside>
                <Content>
                    <Route exact path='/dashboard/product' component={Table}/>
                </Content>
            </div>
            </Router>
        );
    }
}
export default Dashboard;