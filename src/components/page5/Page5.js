import React from 'react'
import '..//page5/Page5.css'
import probg from '..//asset/probg.png'
import { Link } from 'react-router-dom'
// import Product from './Product/Product'


function Page5() {
    return (
        <>
            <div className='page5 row'>
                <div className='page5contant col '>
                    <h1>Our Products</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus.
                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate 
                        eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    </p>
                    <Link to="/Product"><span><button>VIEW MORE</button></span></Link>
                </div>
                <div className='col'>
                    <img src={probg} />
                </div>
            </div>
        </>
    )
}

export default Page5
