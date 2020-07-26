import React from 'react'
import { NavLink } from 'react-router-dom'

const Shoes = ({...props }) => {
    return (
        <section>
            <h1>Model: {props.model}</h1>
            <p>Release Date: {props.release_date}</p>
            <p>Color: {props.colorway}</p>
            <p>Brand: {props.brand}</p>
            <p>Cost: {props.retail_price}</p>
            <NavLink to={`/shoe/${props.id}`}>
                <button type='button'>
                    <img
                        src={props.thumb_url}
                        alt={props.title}
                        className="sneaker-image"
                        />
                </button>
            </NavLink>
        </section>
    )
}

export default Shoes;