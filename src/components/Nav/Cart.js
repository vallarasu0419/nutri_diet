import React from 'react'
import '..//Nav/Cart.css'
import Cartlist from './Cartlist';
import Nav from '..//Nav/Nav'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Footer from '../footer/Footer'
import { Link, useLocation } from 'react-router-dom';


function Cart({cart}) {
  const location = useLocation();
  const acess = location.state;
  console.log(acess)

  return (
    <>
      <div>

        <Nav />
        {/* <Cartlist asdf={cart}/> */}

      </div>
      <Footer />
    </>
  )
}

export default Cart
