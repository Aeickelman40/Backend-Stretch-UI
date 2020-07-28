import React, { Component } from 'react';
import './App.css';
import ShoeBox from '../ShoeBox/ShoeBox'
import {getAllShoes, postComments} from '../ApiCalls'
import { Route, NavLink } from 'react-router-dom';
import ExpandedShoe from "../ExpandedShoe/ExpandedShoe"
import SubmitShoeForm from "../SubmitShoeForm/SubmitShoeForm"


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
  // post new shoe



    
  render() {
    // console.log(this.state)
    return (
      <section>
        <section className="header">
        <section>
            <h1>SOLE</h1>
            <h2>SEARCHIN'</h2>
        </section>
            <a href="https://www.eharmony.com/cms_lp/lp/psdesign/h_justine/?pscode=04_834_32006_0008_8724_0001_140154c_AF%28EN%290MDM1ITPklGbhZ3ZmU0dC9FR2FUUZl3bD9GeExmazB3VmRlc4QWTvN1aqxWQRFmaq5mN2kUT4YnSUBjStNVd4NTZtlkeUhnVzIVWptGbXNlZEh2RBdXaFJUQSJENfZWb3pWQDt0dqNUPklGbjdmJ4EDMwUjNwEjNzcTPydGZhZSZ9UGc5RHajRXYtZSeu9WbyFGal1DZy92d5V2aID_GV1595963363.25034.d90916bc-d105-11ea-a1a4-00163e05bb22ID&cj=YToyOntzOjI6ImlkIjtzOjM4OiJjamQ5MGMxNDY2LWQxMDUtMTFlYS1hMWE0LTAwMTYzZTA1YmIyMiI7czo2OiJleHBpcmUiO2k6MTY1OTAzNTM2Mzt9">
              <p>find your sole mate</p>
            </a>
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
          </section>
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

