import React, {Component} from 'react';
class Show extends Component {
    clickOption = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.props.event(e.target.value);
    }
    render(){
        return(
            <div>
                <p>Show</p>
                <select onChange={this.clickOption}>
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