import React from "react"

export const ProductCard = ({name, description, price}) => {
    return (
        <>
            <div className="card" style={{"width": "18rem;"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description} </p>
                    <p>$ {price} </p>
                </div>
            </div>



        </>
    )
}