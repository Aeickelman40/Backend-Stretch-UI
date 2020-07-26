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
                <button type='button'>
            <NavLink to={`/shoe/${props.id}`}>
                    <img
                        src={props.thumb_url}
                        alt={props.title}
                        className="sneaker-image"
                        />
            </NavLink>
                </button>
        </section>
    )
}

export default Shoes;