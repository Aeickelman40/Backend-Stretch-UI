import React from 'react'

const Shoes = ({brand, colorway, release_date, retail_price, model }) => {
    return (
        <section>
            <h1>Model: {model}</h1>
            <p>Release Date: {release_date}</p>
            <p>Color: {colorway}</p>
            <p>Brand: {brand}</p>
            <p>Cost: {retail_price}</p>
        </section>
    )
}

export default Shoes;