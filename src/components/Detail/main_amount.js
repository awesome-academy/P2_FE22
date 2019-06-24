import React, {Component} from 'react';
class MainContentAmount extends Component {
    render(){
        return(
            <div className="main-content--amount">
                <input className="content__amount" type="number" min="1" max="10" placeholder="1"/>
                <a className="content__btn">mua ngay</a>
            </div>  
        );
    }
}
export default MainContentAmount