import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/Admin/header';
import Chart from '../components/Admin/chart';
import Aside from '../components/Admin/aside';
import Content from '../components/Admin/content';
import Category from '../components/Admin/Category';
import Table from '../components/Admin/table';
import User from '../components/Admin/user';
import Order from '../components/Admin/order';
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
                    <Route  exact path='/dashboard/product'
                            render={()=><Table endpoint='product'/>}/>
                    <Route  exact path='/dashboard/user'
                            render={()=><User endpoint='user'/>}/>
                    <Route  exact path='/dashboard/order'
                            render={()=><Order endpoint='order'/>}/>
                    <Route exact path='/dashboard' component={Chart}/>
                </Content>
            </div>
            </Router>
        );
    }
}
export default Dashboard;