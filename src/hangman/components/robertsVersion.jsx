import React, { Component } from 'react';
import { RandomWord } from './randomWord';
import { movies } from './answerList';
import { games } from './answerList';
import { foods } from './answerList';
import { AppHeader } from './Header';
import { Images } from './images';

 let upperCaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const randindex = Math.floor(Math.random() * movies.length);

export class Movies extends Component {
  state = {
    clicked: false,
    word: this.createWord(),
    errors: 0,
  }

  componentDidMount = () => {
     let self = this
     currentWord = currentWord.toLowerCase()
     for (let i = 0; i < letterList.length; i++) {
       let div = document.getElementsByClassName('letterButtons')[i]
       div.addEventListener('click', function () {
         var letter = this.innerHTML
         console.log('Letter Clicked: ' + letter)
         var line = document.getElementById("line").innerHTML
         if (currentWord.indexOf(letter) != -1) {
           console.log('Line Before: ' + line)
           line = replaceAt(line, currentWord.indexOf(letter) * 2, letter);
           console.log('Line After: ' + line);

           console.log('Current Word Before: ' + currentWord)
           currentWord = replaceAt(currentWord, currentWord.indexOf(letter), ' ');
           console.log('Current Word After: ' + currentWord)
           // "t h e   g o d f a t h e r" => ["t h e", "g o d f a t h e r"] => ["T h e", "G o d f a t h e r"] => "T h e   G o d f a t h e r"]
          let upperCasedWords = line.split('   ').map(upperCaseFirstLetter).join('   ');
          console.log('Upper Cased Words: ' + upperCasedWords);
          document.getElementById("line").innerHTML = upperCasedWords
        } else if (currentWord.toLowerCase().indexOf(letter) == -1) {
             self.handleWrong('add')
         }
      })
    }
  }

  handleClick = () => {
    this.setState({
      clicked: true,
    });
  }

  handleWrong = (type) => {
    this.setState({
      errors: type == 'add' ? this.state.errors + 1 : this.state.errors,
    });
  }

  clickLetter = (event) => {
    const replaceAt = (str, index, char) => {
      return str.substr(0, index) + char + str.substr(index + 1);
    }
    if (this.state.word.indexOf(event.target.innerHTML !== -1)) {
      console.log(this.state.word);
      console.log(event.target.innerHTML);
    } else if (this.state.wor)
  }

  createLetterChoices = () => {
    const letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return (
      // <div className="letters"><div className="letterButtons">{letter}</div></div>
      <div className="letterbox">
        {letterList.forEach((letter) => {
          return (
            <div
              className="letters"
            >
              <div
                className="letterButtons"
                onClick={this.clickLetter}
              >
                {letter}
              </div>
            </div>
          );
        })
      </div>
    );
  }

  createWord = () => {
    var word = ""
    currentWord = movies[this.randindex]
    for (var i = 0; i < movies[this.randindex].length; i++) {
      if (movies[this.randindex].charAt(i) == ' ') {
        word += "  "
      } else {
        word += "_ "
      }
    }
    console.log(word);
    return (

    )
  }

  render () {
    return (
      <div style={{textAlign: "center"}}>
        <AppHeader />
        <h1>Movies</h1>
        <Images errors={this.state.errors} />
        {this.createLetterChoices()}
        <div>
          <h1 id="line" style={{whiteSpace: "pre", fontSize: 80}}>{word}</h1>
        </div>
        <button onClick={this.handleClick}>Solution</button>
        <h1>{this.state.clicked ? movies[this.randindex] : null}</h1>
      </div>
    );
  }
}
