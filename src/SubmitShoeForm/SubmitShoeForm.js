import React, {Component} from 'react';
// import '../apiCalls'
import { postShoe } from '../ApiCalls';

class SubmitShoeForm extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            brand: '',
            model: '',
            colorway: '',
            retail_price: 0,
            submitted: false
        }
    }

    postNewShoe = (event) => {
        event.preventDefault();
        const brand = this.state.brand;
        const model = this.state.model;
        const colorway = this.state.colorway;
        const price = this.state.retail_price;
        postShoe(brand, model, colorway, price);
        this.setState({ submitted: true })
    }

    clearInputs = () => {
        this.setState({ 
            id: 0,
            brand: '',
            model: '',
            colorway: '',
            retail_price: 0,
            submitted: false 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ submitted: true })
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    // addId = () => {
    //     this.setState({ id: Date.now()})
    // }

    render() {
        if (!this.state.submitted) {
        return (
        <form onSubmit={this.handleSubmit} className="defineShoeForm">
            <select 
                className="brandDropdown"
                name="brand"
                placeholder="BRAND"
                value={this.state.brand} 
                onChange={this.handleChange} required>
                <option value="">BRAND</option>
                <option value="NIKE">NIKE</option>
                <option value="Adidas">Adidas</option>
                <option value="Jordan">Jordan</option>
                <option value="Reebok">Reebok</option>
                <option value="Vans">Vans</option>
                <option value="YEEZY">YEEZY</option>
                <option value="CROCS">CROCS</option>
            </select>
            <input
                className="colorInput"
                name="colorway"
                value={this.state.colorway} 
                onChange={this.handleChange} 
                type='text'
                placeholder='COLOR' required>
            </input>
            <input
                name="retail_price"
                value={this.state.retail_price} 
                onChange={this.handleChange} 
                type='number' min="0" max="1000000"
                placeholder='Price (in dollars)' required>
            </input>
            <input
                name="model"
                value={this.state.model} 
                onChange={this.handleChange} 
                type='text'
                placeholder='MODEL' required>
            </input>
            <button type="submit" onClick={this.postNewShoe} className="submitButton" >
                Submit Sneaker
            </button>
        </form>
        )
        } else {
            return (
                <section>
                    <h2>Submission has been added</h2>
                    <button onClick={this.clearInputs}>Submit another shoe</button> 
                    
                </section>
            )
        }
    }
}

export default SubmitShoeForm;