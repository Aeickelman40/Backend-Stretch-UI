import React from 'react'

const Shoes = ({...props }) => {
    return (
        <section>
            <h1>Model: {props.model}</h1>
            <p>Release Date: {props.release_date}</p>
            <p>Color: {props.colorway}</p>
            <p>Brand: {props.brand}</p>
            <p>Cost: {props.retail_price}</p>
            <img
                src={props.thumb_url}
                alt={props.title}
                className="sneaker-image"
            />
        </section>
    )
}

export default Shoes;