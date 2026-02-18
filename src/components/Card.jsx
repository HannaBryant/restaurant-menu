import React from 'react'

export const Card = ({ name, price, image }) => {

    return (
        <>
            <div className="card h-100 shadow-lg">

                <img src= {image} className="card-img-top img-fluid" alt= {name} style={{ height: "180px", objectFit: "cover" }}/>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bolder">{name}</h5>
                        <p className="card-text fw-bold">${price}</p>
                    </div>

            </div>


        </>
    )
}
