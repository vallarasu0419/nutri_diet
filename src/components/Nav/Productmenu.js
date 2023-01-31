import React from 'react'
import '../Nav/Productmenu.css'
import p1 from '../asset/p1.png'
import p2 from '../asset/p2.png'
import p3 from '../asset/p3.png'
import p4 from '../asset/p4.png'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useState } from 'react'




const Productmenu = () => {

    const arrayproduct = [{
        image: p1,
        title: "Child Nutrition",
        rate1: "$27.99",
        rate2: " $23.49"
    }, {
        image: p2,
        title: "Introduction To Healthy",
        rate1: "$26.99",
        rate2: " $22.49"
    },
    {
        image: p3,
        title: "Nutrition And Food",
        rate1: "$25.99",
        rate2: " $21.49"
    },
    {
        image: p4,
        title: "Expertise On Nutrition",
        rate1: "$24.99",
        rate2: " $20.49"
    }]

    const [isActive, setActive]=useState(false);

    const handleclick =() => {
        setActive(!isActive);
    };


    
  return (
    <>
            <div className='mainproductmenu1'>
                {arrayproduct.map((e) => {
                    return (

                        <div className='productmenu1'>
                            <span className='productmenu1span'>20%off</span>
                            <Link to="/ChildNutrition"
                            state={{ image: e.image, title: e.title, rate1: e.rate1, rate2: e.rate2 }}
                            >
                                <img className='productmenuimg' src={e.image} /></Link>
                            <Link to="/ChildNutrition" style={{textDecorationLine:"none"}}>
                                <h2 className='productmenu1h2'>{e.title} </h2> </Link>                           
                            <strike>{e.rate1}</strike>{e.rate2}
                        </div>

                    )
                })}
            </div>
    </>
  )
}

export default Productmenu

