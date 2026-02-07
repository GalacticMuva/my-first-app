import React from "react"

export const ProductCard = ({ name, description, price, imageURL }) => {
    return (
        <>
            <div className="card h-100 shadow-sm">
                <img src={imageURL} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="fw-bold">${price}</p>
                </div>
            </div>
        </>
    )
}