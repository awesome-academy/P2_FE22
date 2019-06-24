import React, { Component} from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';
import './share.css';
export default class Share extends Component {
  render() {
    return (
      <FacebookProvider appId="2263943123697446">
        <ShareButton href="http://www.facebook.com"
            className="share__btn">
          Share
        </ShareButton>
      </FacebookProvider>
    );
  }
}