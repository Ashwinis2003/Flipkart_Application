
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "./slices/productSlice";

function Products({ test }) {

    const products = test


    const [inputSearch, setInputSearch] = useState('')

    function handleSearch(e) {

        setInputSearch(e.target.value)

    }

    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    console.log('token', token)

    const prod = useSelector((state) => state.products.products)

    console.log(prod, 'products by redux');

    const dispatch = useDispatch()

    useEffect(() => {
        if (!token) {

            navigate('/')

        }
        dispatch(fetchProducts())
    }, [])


    const filteredProducts = products.filter(each => each.title.toLowerCase().includes(inputSearch.toLowerCase()))


    // console.log(filteredProducts, 'filter')

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (

        <>
            <div className="container">
                <div className="d-flex">
                    <h1 className="text-center">Products</h1>
                    <button onClick={handleLogout} className="text-center">logout</button>
                </div>



                <div className="text-center my-5">
                    <input type="text" placeholder="Enter the product title" onChange={(e) => handleSearch(e)} />
                </div>


                <div className="row">
                    {

                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <div key={index} className="col-xs-12 col-sm-12 col-md-4 col-lg-3 mb-4">
                                    <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                                        <Link to={`/products/${product.id}`}>
                                            <div>
                                                <img src={product.image} style={{ width: '200px', height: '200px' }} alt={product.title} />
                                            </div>
                                        </Link>
                                        <Link to={`/products/${product.id}`}>

                                            {product.title.length > 25 ? `${product.title.substring(0, 25)}` : product.title}

                                        </Link>

                                        <h3>${product.price}</h3>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                            <button className="btn btn-warning" style={{ flex: '1', marginRight: '5px' }}>Add to Cart</button>
                                            <button className="btn btn-success" style={{ flex: '1' }}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (<h1> no products available</h1>)

                    }
                </div>
            </div>

        </>

    )
}

export default Products