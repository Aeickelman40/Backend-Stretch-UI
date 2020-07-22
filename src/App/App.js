import React, { Component } from 'react';
import './App.css';
import ShoeBox from '../ShoeBox/ShoeBox'
import Shoes from '../Shoes/Shoes'

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }

  componentDidMount = () => {

  }


  render() {
    return (
      <section>
      <h1>Setup</h1>
      <ShoeBox />
      </section>
    );
  }
}

export default App;
