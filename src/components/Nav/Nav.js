import React, { useState } from 'react'
import '../Nav/Nav.css'
import logo from '../asset/logoNutriDiet.png'
import Menu1 from './Menu1'
import food from '../asset/food.jpg'
import Sidebar from '../Nav/Sidebar'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'
import Productmenu from '../Nav/Productmenu'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Nav() {

  const [dropDown, setDropDown] = useState({
    drop1:false,
    drop2:false,
    drop3:false,
    drop4:false,
    drop5:false,
    drop6:false,
  });
  const [isActive, setActive] = useState(true);
  const [open, setOpen] = useState();


  const handle = () => {
    setActive(Active => !Active);

    setOpen(true);

  }



  return (
    <>
      
      <nav className='mainnav navmain'>

        <div>

          <img className='navimg' src={logo} />
        </div>

        <div className='nav'>
          <ul className='navfx'>
            <li className='nav_il' onMouseEnter={() => setDropDown({ 
              ...dropDown,
                 drop1:true,
                 drop2:false,
                 drop3:false,
                 drop4:false,
                 drop5:false,
                 drop6:false,}
              )} onMouseLeave={() => setDropDown(false)}>
              <Link to="/" className='nav_il'>Home</Link>{dropDown.drop1 && <Menu1/>}</li>

            <Link className='nav_il' to="/">AboutUs</Link>

            <li className='nav_il' onMouseEnter={() => setDropDown({ 
              ...dropDown,
                 drop1:false,
                 drop2:false,
                 drop3:true,
                 drop4:false,
                 drop5:false,
                 drop6:false,}
              )} onMouseLeave={() => setDropDown(false)}>
              <Link to="/Product" className='nav_il'>Products</Link>{dropDown.drop3 && <Productmenu/>}</li>

            <Link className='nav_il' to="/">Service</Link>

            <Link className='nav_il' to="/Blogs">Blogs</Link>

            <Link className='nav_il' to="/">Contact</Link>
            <Link to="/Cart"><ShoppingCartOutlinedIcon/></Link>
          </ul>
        </div>

        {/* <div className={isActive ? "page1container" : "change"} onClick={handle}> */}
        <div className= "page1container" onClick={handle}>
          <div className="change bar1 "></div>
          <div className="change bar2 "></div>
          <div className="change bar3 "></div>
        </div>

      </nav>

      {open && <Sidebar close={() => setOpen(!open)} />}
    </>
  )
}

export default Nav
