import React, { useState } from 'react'
import '../Product/Product.css'
import p1 from '../asset/p1.png'
import p2 from '../asset/p2.png'
import p3 from '../asset/p3.png'
import p4 from '../asset/p4.png'
import p5 from '../asset/p5.png'
import p6 from '../asset/p6.png'
import p7 from '../asset/p7.png'
import Nav from '../Nav/Nav'
import Page6 from '../page6/Page6'
import Footer from '../footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import Singleproduct from './Singleproduct'
// import RHFTextField from './RHFTextField'
// import { Link } from 'react-router-dom'
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
// import ShoppingCart from '@mui/icons-material/ShoppingCart';





function Product() {

    const arrayproduct = [{
        id: 1,
        image: p1,
        title: "Child Nutrition",
        rate1: "$27.99",
        rate2: " $23.49"
    }, {
        id: 2,
        image: p2,
        title: "Introduction To Healthy",
        rate1: "$26.99",
        rate2: " $22.49"
    },
    {
        id: 3,
        image: p3,
        title: "Nutrition And Food",
        rate1: "$25.99",
        rate2: " $21.49"
    },
    {
        id: 4,
        image: p4,
        title: "Expertise On Nutrition",
        rate1: "$24.99",
        rate2: " $20.49"
    },
    {
        id: 5,
        image: p5,
        title: "Exercise For Health At Home",
        rate1: "$27.99",
        rate2: " $25.49"
    },
    {
        id: 6,
        image: p6,
        title: "Design Your Plan",
        rate1: "$24.99",
        rate2: " $20.49"
    },
    {
        id: 7,
        image: p7,
        title: "Prepaid Healthy Meals",
        rate1: "$25.99",
        rate2: " $21.49"
    }, {
        id: 8,
        image: p2,
        title: "Design Your Diet Plan",
        rate1: "$22.99",
        rate2: " $19.49"
    }];

 


    return (
        <>
            <ScrollToTop className='abcd' smooth top="20" />
            <div className='productmenu'>
                <Nav />
                <div className='productmenudiv'>
                    <h3 className='productmenuh3'>Products</h3>
                    <p className='productmenup'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />
                        Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
            </div>
            <div className='mainproduct'>
            {/* <RHFTextField name="email" label="Email address or Mobile Number" /> */}
                {arrayproduct.map((e) => {
                    return (
                        
                        <Singleproduct data={e}/>
                    )
                })}

            </div>
            <Page6 />
            <Footer />
        </>
    )
}

export default Product
