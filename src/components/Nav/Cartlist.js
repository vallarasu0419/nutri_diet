import React from 'react'
import '..//Nav/Cartlist.css'




const Cartlist = (asdf) => {
    return (
        <>
        <h1>CART</h1>

        <img src={asdf.image} style={{width:"200px",height:"200px"}}/>


            {/* <div>
                {cart.length === 0 && <h1>no product cart is empty</h1>}
            </div> */}
            {/* <div className='cartdiv'>
          <h1>Cart</h1>
          <div className='cartline'></div>
          <div className='cartlist'>
            <ProductionQuantityLimitsIcon sx={{ color: "rgb(1,123,254)" }} />
            <p>Your cart is currently empty.</p>
            <span sx={{marginLeft:'20px'}}>Your cart is currently empty.</span>
          </div>
          <Link to="/Product"><button className='cartbtn'>Return to shop</button></Link>
        </div> */}
            {/* <div>
                {cart.map((e) => (
                    <img src={e.image} />
                ))}
            </div> */}
        </>
    )
}

export default Cartlist
