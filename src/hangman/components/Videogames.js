import React, { Component } from 'react';
import { Category } from './Category';
import { games } from './answerList';

export class Videogames extends Component {
<<<<<<< HEAD
  render () {
    return <Category name="Video Games" wordList={games}/>;
=======
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
    this.randindex = Math.floor(Math.random() * games.length)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  createWord = () => {
    var word = ""
    for (var i = 0; i < games[this.randindex].length; i++) {
      if (games[this.randindex].charAt(i) == ' ') {
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
        Games
        {this.createWord()}
        <button onClick={this.handleClick}>Solution</button>
        <h1>{this.state.clicked ? games[this.randindex] : null}</h1>
      </div>
    );
>>>>>>> 9c6f2df5fbf704dd06fb5ea5047a3fbb27b9ccdc
  }
}
