import React, { Component } from 'react';
import './App.css';
import ShoeBox from '../ShoeBox/ShoeBox'
import Shoes from '../Shoes/Shoes'
import {getAllShoes} from '../ApiCalls'
import { Route } from 'react-router-dom';
import ExpandedShoe from "../ExpandedShoe/ExpandedShoe"

class App extends Component {
  constructor () {
    super();
    this.state = {
      shoes: []
    }
  }

  componentDidMount = async () => {
    try {
      const allShoes = await getAllShoes();
      this.setState({shoes: allShoes})
    } catch (error) {
      await this.setState({error: error})
    }
  }
  
  
  render() {
    console.log(this.state)
    return (
      <section>
        <section className="header">
          <h1>Sole Searchin'</h1>
          <p>Find your sole mate</p>
        </section>
        <section className="main-body">
          <ShoeBox shoes={this.state.shoes}/>
          <Route 
            exact path="/shoes/:id" 
            render={ ({match}) => <ExpandedShoe {...match} /> }
             />
        </section>
      </section>
    );
  }
}

export default App;
