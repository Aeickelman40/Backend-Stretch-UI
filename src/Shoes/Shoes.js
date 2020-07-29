import React from 'react'
import { NavLink } from 'react-router-dom'

const Shoes = ({...props }) => {
    return (
        <section> 
            <p>Cost: {props.retail_price}</p>
            <NavLink to={`/shoe/${props.id}`}>
                <button type='button' className="expand-button">
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