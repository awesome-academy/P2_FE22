import React, { Component} from 'react';
class MainImage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {imglarger, img} = this.props;
        return(
            <div className="main-img">
                <img src={process.env.PUBLIC_URL + imglarger}/>
                <div className="main-img--inline">
                    {img.map((item, index) => {
                        return <img key={index} src={process.env.PUBLIC_URL + item}/>
                    })}
                </div>
            </div>
        );
    }
}
export default MainImage