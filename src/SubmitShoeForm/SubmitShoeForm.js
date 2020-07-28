import React, {Component} from 'react';

class SubmitShoeForm extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            // brand: '',
            model: '',
            colorway: '',
            retail_price: 0,
            submitted: false
        }
    }

    addAnotherShoe = () => {
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
        console.log(this.state)
        // indicator that says submission is pending...
        // shoe submitted 
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    addId = () => {
        this.setState({ id: Date.now()})
    }

    render() {
        if (!this.state.submitted) {
        return (
        <form onSubmit={this.handleSubmit}>
            <select 
                name="brand"
                value={this.state.brand} 
                onChange={this.handleChange} required>
                <option value="">Please Choose A Brand</option>
                <option value="NIKE">NIKE</option>
                <option value="Adidas">Adidas</option>
                <option value="Jordan">Jordan</option>
                <option value="Reebok">Reebok</option>
                <option value="Vans">Vans</option>
                <option value="YEEZY">YEEZY</option>
                <option value="CROCS">CROCS</option>
            </select>
            <input
                name="colorway"
                value={this.state.colorway} 
                onChange={this.handleChange} 
                type='text'
                placeholder='Add your colorway here' required>
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
                placeholder='Model' required>
            </input>
            <button type="submit" onClick={this.addId}>
                
            </button>
        </form>
        )
        } else {
            return (
                <section>
                    <h2>Submission has been added</h2>
                    <button onClick={this.addAnotherShoe}>Submit another shoe</button> 
                    
                </section>
            )
        }
    }
}

export default SubmitShoeForm;