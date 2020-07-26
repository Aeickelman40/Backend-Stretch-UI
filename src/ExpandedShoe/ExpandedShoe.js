import React from "react"


const ExpandedShoe = ({ ...props }) => {
    console.log(props)
    return (
        <h1>{props.model}</h1>
    )
}

export default ExpandedShoe;

