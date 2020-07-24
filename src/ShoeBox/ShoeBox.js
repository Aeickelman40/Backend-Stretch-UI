import React from 'react'
import Shoes from '../Shoes/Shoes'

const ShoeBox = ( {shoes} ) => {
    const shoeCards = shoes.map((shoe) => { 
        return ( 
        <section className="shoe-box">
            <p>Shoe Box</p>
            <Shoes {...shoe} key={shoe.id} />
        </section>
        )
    })
return (
    <section className = "shoes"> {shoeCards} </section>)
};

export default ShoeBox;
