import React from 'react'
import '..//Product/IntroductionToHealth.css'
import p1 from '../asset/p1.png'
import p2 from '../asset/p2.png'
import p3 from '../asset/p3.png'
import { Link } from 'react-router-dom';



const IntroductionToHealth = () => {


    const productList = [{ id: 1, title: 'Product 1', image: {p1}, price: '$19.99' },
    { id: 2, title: 'Product 2', image: {p2}, price: '$29.99' },
    { id: 3, title: 'Product 3', image: {p3}, price: '$39.99' }];

    function Product({ product }) {
        return (
            <Link to={`/product/${product.id}`}>
                        <div className="product">
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <h3>{product.price}</h3>
                        </div>
                        </Link>
        )
    }

    return (
        <div>
            <div>
                {productList.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default IntroductionToHealth
