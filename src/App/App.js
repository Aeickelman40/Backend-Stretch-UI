import React, { Component } from 'react';
import './App.css';
import ShoeBox from '../ShoeBox/ShoeBox'
import {getAllShoes, postComments} from '../ApiCalls'
import { Route } from 'react-router-dom';
import ExpandedShoe from "../ExpandedShoe/ExpandedShoe"

class App extends Component {
  constructor () {
    super();
    this.state = {
      shoes: [],
      comments: [],
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


  postNewComment = async (author, main_text, shoeId) => {
    const response = await postComments(author, main_text, shoeId);
    console.log('response')
    return response;
  }

  addComment = (...newComment) => {
    this.setState({ ...this.state, comments: newComment })
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
              return <ExpandedShoe
                        postNewComment={this.postNewComment}
                        comments={this.state.comments}
                        addComment={this.addComment}
                        shoeId ={id}

               {...shoeToRender}/>
            }}
            />
        </section>
      </section>
    );
  }
}

export default App;

