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
        <section className="header">
          <h1>Sole Searchin'</h1>
          <p>Find your sole mate</p>
        </section>
        <section className="main-body">
          <ShoeBox />
        </section>
      </section>
    );
  }
}

export default App;
