import React, { Component } from 'react';
import '../App.css';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        왜 안나오시죠?
        {/* <li className="tweet">
          <div className="writer">{writer}</div>
          <div className="date">{date}</div>
          <div>{children}</div>
        </li> */}
        {/* {this.state.tweets.map((items) => {
          <ul>
            <li className="tweetDefault" key={items.uuid}>
            <div>{items.writer}</div>
            <div>{items.date}</div>
            <div>{items.content}</div>
            </li>
          </ul>
        })} */}
      </div>
    );
  }
}

export default Tweet;