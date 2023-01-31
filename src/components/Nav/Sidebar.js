import React from 'react'
import '../Nav/Sidebar.css'
import logo from '../asset/logoNutriDiet.png'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

function Sidebar({close}) {
    return (
        <>
            <div className='sidebar' >
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div><img className='sidebarimg' src={logo} /></div>
                <div><button className='sidebarbtn' onClick={close}>X</button></div>
                </div>
                <ul className='sidebar_lu'>
                    <Link to="/" className='sidebar_il'><li className='sidebar_il'>Home</li></Link>
                    <Link to="/" className='sidebar_il'><li className='sidebar_il'>AboutUs</li></Link>
                    <Link to="/Product" className='sidebar_il'><li className='sidebar_il'>Products</li></Link>
                    <Link to="/Blogs" className='sidebar_il'><li className='sidebar_il'>Blogs</li></Link>
                    <Link to="/" className='sidebar_il'><li className='sidebar_il'>Service</li></Link>
                    <Link to="/" className='sidebar_il'><li className='sidebar_il'>Contact</li></Link> 
                </ul>
            </div>
        </>
    )
}

export default Sidebar
