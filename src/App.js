import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  state = { [
    { front: 'ahoah', back: 'hwyo', position: true },
    { front: '1', back: '2', position: true },
    { front: 'A', back: 'B', position: true }, ],
    showCard: true,
  }

  toggleShowCard = () => {
    this.setState( state => {
      return { showCard: !state.showCard }
    })
  }

  render() {
    return (


    );
  }
}

export default App;
