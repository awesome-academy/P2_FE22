import React, {Component} from 'react';
class TextTab extends Component{
    render(){
        return(
            <p className="tab__content--text">{this.props.text}</p>
        )
    }
}
export default TextTab;