import React, { Component } from 'react';
import './App.css';
import ShoeBox from '../ShoeBox/ShoeBox'
import {getAllShoes} from '../ApiCalls'
import { Route, NavLink } from 'react-router-dom';
import ExpandedShoe from "../ExpandedShoe/ExpandedShoe"
import SubmitShoeForm from "../SubmitShoeForm/SubmitShoeForm"


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

  // calculate range
  // at this value on the range
  // a certain shoe will display
  // we can have entries
  // and sort them by price
  // at index 0 we will have the opportunity to give to the
  // charity of your choice
  // however much you choose
  // 
  // but once you get past the 0, historical shoes shoes appear
  // and their prices are evaluated through time
  // it will represent a kind of encyclopedia
  // on shoes as we know them.

  // post new shoe

  // addShoeToDatabase = ()
    
  render() {
    // console.log(this.state)
    return (
      <section>
        <section className="header">
          <h1>Sole Searchin'</h1>
          <p>Find your sole mate</p>
          <section className="headerButtonsContainer">
            <NavLink to={"/submitShoe"}>
              <button className="submitButton">
                Add Sneaker
              </button>
            </NavLink>
            <NavLink to={"/"}>
              <button className="submitButton">
                Home
              </button>
            </NavLink>
            <NavLink to={"theForum"}>
              <button className="submitButton">
                The Forum
              </button>
            </NavLink><NavLink to={"codeChallenges"}>
              <button className="submitButton">
                codeChallenges
              </button>
            </NavLink><NavLink to={"/"}>
              <button className="submitButton">
                Networking
              </button>
            </NavLink>
          </section>
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
            <Route 
              exact path="/submitShoe" 
              render={() => <SubmitShoeForm />}
            />
        </section>
      </section>
      
    );
  }
}

export default App;

