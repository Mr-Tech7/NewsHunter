import Navbar from '../src/components/Navbar'
import './App.css';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  name = 'vaibhav singh'
  render() {
    return (
      <div>
        <Navbar />
        <News/>
      </div>
    )
  }
}
