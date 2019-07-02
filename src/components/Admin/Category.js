import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction'
import callAPI from '../../utils/apiCaller';
class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            listCate: []
        }
    }
    onType = (e) => {
        this.props.filterProduct(e);
    }
    componentDidMount(){
        callAPI('product', 'GET', null)
            .then(res => {
                let type = [];
                for(let item of res.data){
                    type.push(item.type)
                }
                type = [...new Set([...type])]
                this.setState({
                    listCate: type
                })
            })
    }
    render(){
        const {listCate} = this.state;
        return(
            <ul className="category">
                <li className="category__item"
                            onClick={this.onType.bind(this, undefined)}>
                            tất cả
                        </li>
                {listCate.map((item, index) => {
                    return(
                        <li className="category__item"
                            key={index}
                            onClick={this.onType.bind(this, {type: 'type', item: item})}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        filterProduct: (filter) => {
            dispatch(action.filterProduct(filter))
        }  
    }
}
export default connect(null, mapDispatchtoProps)(Category);