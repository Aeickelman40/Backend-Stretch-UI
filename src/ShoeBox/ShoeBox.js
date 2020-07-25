import React from 'react'
import Shoes from '../Shoes/Shoes'
import './ShoeBox.css';
import './mediaQuery.css';



const ShoeBox = ( {shoes} ) => {
    const shoeCards = shoes.map((shoe) => { 
        return ( 
        <section className="shoe-box">
            <p>{shoe.title}</p>
            <Shoes {...shoe} key={shoe.id} />
        </section>
        )
    })
return (
    <section className = "shoes"> {shoeCards} </section>)
};

export default ShoeBox;
