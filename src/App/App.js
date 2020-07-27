import React, { Component } from 'react';
import './App.css';
import ShoeBox from '../ShoeBox/ShoeBox'
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
    // console.log(this.state)
    return (
      <section>
        <section className="header">
          <h1>Sole Searchin'</h1>
          <p>Find your sole mate</p>
        </section>
        <section className="main-body" data-testid="shoe-area">
          <Route exact path="/" render = { () => <ShoeBox shoes={this.state.shoes}/>} />
          <Route 
            exact path="/shoe/:id" 
            render={({match}) => {
              const { id } = match.params;
              const shoeToRender = this.state.shoes.find(shoe => shoe.id === parseInt(id));
              return <ExpandedShoe {...shoeToRender}/>
            }}
            />
        </section>
      </section>
    );
  }
}

export default App;

