import { Card, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import delivery from '../asset/delivery-truck.png'
import badge from '../asset/badge.png'
import teams from '../asset/teams.png'
import abouts from '../asset/about-s.webp'
import '../page2/Page2.css'
import ScrollToTop from 'react-scroll-to-top'


function Page2() {


  // const grid1 = document.querySelectorAll(".page2-grid1")

  // const observerss = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     entry.target.classList.toggle("showss", entry.isIntersecting)
  //   })
  // }, {
  //   threshold: 0.5
  // })
  // grid1.forEach(grid1 => {
  //   observerss.observe(grid1)
  // })

  {/* ###################################### */}
  // const grid2 = document.querySelectorAll(".page2-grid2")

  // const observers = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     entry.target.classList.toggle("shows", entry.isIntersecting)
  //   })
  // }, {
  //   threshold: 0.5
  // })

  // grid2.forEach(grid2 => {
  //   observers.observe(grid2)
  // })

     {/* ###################################### */}

  // const grid3 = document.querySelectorAll(".page2-grid3 ")

  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     entry.target.classList.toggle("show", entry.isIntersecting)
  //   })
  // }, {
  //   threshold:0.5
  // })
  // grid3.forEach(grid3 => {
  //   observer.observe(grid3)
  // })

{/*#############################################*/}

// const grid5= document.querySelectorAll(".page2-grid5 ")

//   const observersss = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       entry.target.classList.toggle("showsss", entry.isIntersecting)
//     })
//   }, {
//     threshold: 0.5
//   })
//   grid5.forEach(grid5 => {
//     observersss.observe(grid5)
//   })

  return (
    <>
    <ScrollToTop className='abcd' smooth top="20"/>
      <Container >
        <Grid container Spacing={2} className="page2_maingrid">
          <Grid item lg={4} md={4} sm={8} xs={10} className='page2-grid1 ' style={{ backgroundColor: "#f9f8f9", padding: "20px", textAlign: "center" }}>
            <item>
              <img style={{ height: '60px', width: '60px', marginTop: '15px' }} src={delivery} />
              <h1 style={{ marginTop: '15px' }}>100% Results</h1>
              <p style={{ marginTop: '15px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </item>
          </Grid>

          <Grid item lg={4} md={4} sm={8} xs={10} className='page2-grid2 ' style={{ padding: "20px", textAlign: "center" }}>
            <item>
              <img style={{ height: '60px', width: '60px', marginTop: '15px' }} src={badge} />
              <h1 style={{ marginTop: '15px' }}>Certified</h1>
              <p style={{ marginTop: '15px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </item>
          </Grid>

          <Grid item lg={4} md={4} sm={8} xs={10} className='page2-grid3 ' style={{ backgroundColor: "#f9f8f9", padding: "20px", textAlign: "center" }}>
            <item>
              <img style={{ height: '60px', width: '60px', marginTop: '15px' }} src={teams} />
              <h1 style={{ marginTop: '15px' }}>Professional Team</h1>
              <p style={{ marginTop: '15px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </item>
          </Grid>
        </Grid>
      </Container>
      {/* ############################################################################ */}
      <Container>
        <Grid container Spacing={0} className='page2_bottomgrid'>
          <Grid item lg={4} md={4} sm={8} xs={10} className='page2-grid4 page2-grid1'>
            <item>
              <img className='page2-imagegirl' src={abouts} />
            </item>
          </Grid>
          <div item lg={4} md={4} sm={8} xs={10} className='page2-grid5 ' >
            <item>
              <h1 className='page2-grid5h1 ' >NutriDiet Introduction</h1>
              <p className='page2-grid5p '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
              <span className='page2-grid5span '><button className='page2btn'>ABOUT ME</button></span>
            </item>
          </div>
        </Grid>
      </Container>

    </>
  )
}

export default Page2
