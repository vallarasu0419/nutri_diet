import React from 'react'
import fav from '../asset/fav.png'
import '..//footer/Aboutus.css'

function Aboutus() {
  return (
    <div className='aboutus'>
        <h3 className='aboutush3'>AboutUs</h3>
       <span className='aboutusunderline'></span>
        <img className='aboutusimage' src={fav}/>
    <p className='aboutusp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s</p>
    </div>
  )
}

export default Aboutus
