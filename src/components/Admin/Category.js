import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/indexAction'
class Category extends Component {
    onType = (e) => {
        this.props.filterProduct(e);
    }
    componentDidMount(){
        if(this.props.typeProduct.length === 0){
            this.props.getTypeProductRequest();
        }
    }
    render(){
        const {typeProduct} = this.props;
        return(
            <ul className="category">
                <li className="category__item"
                            onClick={this.onType.bind(this, undefined)}>
                            tất cả
                        </li>
                {typeProduct.map((item, index) => {
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
const mapStatetoProps = (state) => {
    return {
        typeProduct: state.productReducer.typeProduct
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        getTypeProductRequest: () => {
            dispatch(action.getTypeProductRequest())
        },
        filterProduct: (filter) => {
            dispatch(action.filterProduct(filter))
        }  
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Category);