import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';
import { Images } from './images';

export class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
    this.randindex = Math.floor(Math.random() * foods.length)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  createWord = () => {
    var word = ""
    for (var i = 0; i < foods[this.randindex].length; i++) {
      if (foods[this.randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    //console.log(word);
    return (
      <div>
        <h1 style={{whiteSpace: "pre"}}>{word}</h1>
      </div>
    )
  }

  render () {
    return (
      <div>
        <AppHeader />
        <Images />
        Food
        {this.createWord()}
        <button onClick={this.handleClick}>Solution</button>
        <h1>{this.state.clicked ? foods[this.randindex] : null}</h1>
      </div>
    );
  }
}
