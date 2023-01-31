import React from 'react'
import Nav from '../Nav/Nav'
import Page1 from '../page1/Page1'
import Page2 from '../page2/Page2'
import Page3 from '../page3/Page3'
import Page4 from '../page4/Page4'
import Page5 from '../page5/Page5'
import Page6 from '../page6/Page6'
import Footer from '../footer/Footer'
import Blogs from '../Blogs/Blogs'
import { BrowserRouter as Route, Router, Routes, Link } from 'react-router-dom'
import Product from '../Product/Product'
// import ChildNutrition from '../Product/ChildNutrition'
// import Cart from '../Nav/Cart'
import Productmenu from '../Nav/Productmenu'
import IntroductionToHealth from '..//Product/IntroductionToHealth'

import ExampleSlide from '..//full_project/ExampleSlide'



function Fullproject() {
  return (
    <div>

      {/* <ExampleSlide/> */}
      {/* <IntroductionToHealth/> */}
      {/* <Productmenu/> */}
      {/* <Cart/> */}
      {/* <ChildNutrition/> */}
      {/* <Product/> */}
      {/*  <Blogs/>  */}
      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />

    </div>
  )
}

export default Fullproject
