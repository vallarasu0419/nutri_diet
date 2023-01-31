import React from 'react'
import '../Product/Singleproduct.css'
import { Link, useLocation } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import p1 from '../asset/p1.png'
import Product from '../Product/Product'
import { useHistory } from 'react-router-dom';



const Singleproduct = ({ data }) => {

  
    const [isActive, setActive] = useState(false);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (Product) => {
        setActive(!isActive);
        setCart([...cart, Product])


        // const productexist = cart.find((item) => item.id === Product.id);
        // if (productexist) {
        //     setCart(cart.map((item) => item.id === Product.id ?
        //         { ...productexist, Quatity: productexist.Quatity + 1 } : item));
        // }
        // else {
        //     setCart([...cart, { ...Product, Quatity: 1 }]);
        // }
    };
    console.log(cart)
    return (

        <>

            <div className='Singleproduct'>
                <span className='Singleproductspan'>20%off</span>

                <Link to={`/ChildNutrition`}
                    state={{ image: data.image, title: data.title, rate1: data.rate1, rate2: data.rate2 }}
                ><img className='Singleproductimg' src={data.image} /></Link>

                <h2 className='Singleproducth2'>{data.title}</h2>

                <Stack spacing={1}>
                    <Rating name="size-medium" defaultValue={2} className='Singleproductrating' />
                </Stack>
                <strike>{data.rate1}</strike>{data.rate2}

                <div className={isActive ? null : "viewcart"}><Link to="/Cart" state={cart} style={{
                    position: "absolute",
                    bottom: "28px",
                    left: "80px",
                    color: 'black',
                    fontSize: "20px",
                    fontWeight: "500",
                    textDecorationLine: "none"
                }}
                >View Cart</Link></div>
                <button className={isActive ? "Singleproductbtn1" : "Singleproductbtn"} onClick={() => handleAddToCart(data.image)}>
                    <ShoppingCart className='shoppingcart' />ADD TO CART</button>
            </div>

        </>
    )
}

export default Singleproduct

