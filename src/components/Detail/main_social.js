import React, {Component} from 'react';
import Share from './facebook_share';
class MainContentSocial extends Component {
    render(){
        return(
            <div className="main-content--social">
              <div className="content__social-item content__social-item--blue">
                <i className="fa fa-facebook-square"></i>
                <p>Like</p>
              </div>
              <p className="content__number">0</p>
              <div className="content__social-item content__social-item--blueover">
                <i className="fa fa-twitter"> </i>
                <p>Twitter</p>
              </div>
              <div className="content__social-item content__social-item--transparent">
                <i className="fa fa-google-plus"></i>
              </div>
              <p className="content__number">0</p>
              
              <div className="content__social-item content__social-item--orange">
                <i className="fa fa-plus-square"></i>
                <Share></Share>
              </div>
            </div>
        )
    }
}
export default MainContentSocial