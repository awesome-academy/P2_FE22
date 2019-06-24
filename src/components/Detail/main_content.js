import React, {Component} from 'react';
class MainContent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="tab__content" id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}
export default MainContent