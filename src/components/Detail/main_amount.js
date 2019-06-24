import React, {Component} from 'react';
class MainContentAmount extends Component {
    render(){
        return(
            <div className="main-content--amount">
                <input type="number" className="content__amount" name="quantity" min="1" max="10" value="1"/>
                <a className="content__btn">mua ngay</a>
            </div>  
        );
    }
}
export default MainContentAmount