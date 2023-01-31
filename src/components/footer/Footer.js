import React from 'react'
import '../footer/Footer.css'
import footerbg from '../asset/footer-bg.png'
import Aboutus from '../footer/Aboutus'
import Information from '../footer/Information'
import HelpFull from '../footer/HelpFull'
import Bestviral from '../footer/Bestviral'
import { Grid } from '@mui/material'


function Footer() {
    return (

        <>

            <div className='foot'>
                <Grid container spacing={0} className='footgrid'  >
                    <Grid item xs={12} md={6} lg={3}> <Aboutus /> </Grid>
                    <Grid item xs={12} md={6} lg={3}><Information /></Grid>
                    <Grid item xs={12} md={6} lg={3}><HelpFull /></Grid>
                    <Grid item xs={12} md={6} lg={3}><Bestviral /></Grid>
                </Grid>
                <div style={{ borderTop: "2px solid #090809 ", marginLeft: 50, marginRight: 50,marginTop:'30px' }}></div>
                <p className='footp'>Copyright © 2023 nutrition-wordpress | Powered by Example.com</p>
                {/* <img src={footerbg}/> */}
            </div>

        </>

    )
}

export default Footer
