import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
export default class Comment extends Component {
  render() {
    return (
      <FacebookProvider appId="2263943123697446">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    );
  }
}