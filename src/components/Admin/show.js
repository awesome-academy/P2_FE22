import React, {Component} from 'react';
import '../../styles/show.css'
class Show extends Component {
    clickOption = (e) => {
        e.preventDefault();
        this.props.event(e.target.value);
    }
    render(){
        return(
            <div className="show">
                <p className="show-title">Show</p>
                <select className="show-select" onChange={this.clickOption}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            </div>
        );
    }
}

export default Show;