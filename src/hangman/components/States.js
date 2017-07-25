import React, { Component } from 'react';
import { Category } from './Category';
import { states } from './answerList';

export class States extends Component {
  render () {
    return <Category name="States" wordList={states}/>;
  }
}
