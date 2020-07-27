import React from "react"


const ExpandedShoe = ({ ...props }) => {
    console.log(props)
    return (
        <section>
            <h1>Model: {props.model}</h1>
            <p>Brand: {props.brand}</p>
            <p>Color: {props.colorway}</p>
            <p>Release Date: {props.release_date}</p>
            <p>Demographic: {props.demographic}</p>
            <p>Price: {props.retail_price}</p>
            <img
                src={props.small_image_url}
                alt={props.title}
                className="sneaker-image"
            />
        </section>
    )
}

export default ExpandedShoe;

// brand: "Nike"
// colorway: "Black/Off Noir-Solar Flare-White"
// created_at: "2020-07-26T18:22:34.665Z"
// demographic: "men"
// id: 693
// image_url: "https://stockx.imgix.net/Nike-Zoom-Freak-2-Black-White.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1594978755"
// model: "Nike Zoom Freak 2"
// product: "Black White"
// release_date: "2020-08-07T23:59:59.000Z"
// retail_price: 130
// small_image_url: "https://stockx.imgix.net/Nike-Zoom-Freak-2-Black-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1594978755"
// thumb_url: "https://stockx.imgix.net/Nike-Zoom-Freak-2-Black-White.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1594978755"
// title: "Nike Zoom Freak 2 Black White"
// updated_at: "2020-07-26T18:22:34.665Z"
// year: 2020