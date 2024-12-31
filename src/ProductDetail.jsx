import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({product}) {

    const { id } = useParams();

    console.log(typeof id) // string

    const routesId = parseInt(id) // number

    console.log(typeof routesId,"routeId")


    let prod = product.find((each) => each.id === routesId)

    console.log(prod,'prod')

    

    // if (loading) {
    //     return (
    //         <h1 className="text-center mt-5">Loading...</h1>
    //     );
    // }

    return (

        <>
        <center>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Product Detail</h1>

                <div className="row">
                    <div className="col-md-5">
                        <img src={prod.image} className="img-fluid" alt={prod.title} style={{ maxHeight: '300px', objectFit: 'contain' }} />
                    </div>

                    <div className="col-md-7">
                        <h3>{prod.title}</h3>
                        <p className="text-muted">{prod.category}</p>
                        <h4 className="text-success">${prod.price}</h4>
                        <p>{prod.description}</p>

                        <div className="d-flex  mt-4">
                            <button className="btn btn-warning btn-lg  me-5">Add to Cart</button>
                            <button className="btn btn-success btn-lg ">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

     

        
        </center>
        </>
    );
}

export default ProductDetail;