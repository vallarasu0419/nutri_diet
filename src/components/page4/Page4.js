import React, { Component } from 'react'
import '..//page4/Page4.css'
import Slider from "react-slick";
import ser1 from '../asset/ser-1.png'
import ser2 from '../asset/ser-2.png'
import ser3 from '../asset/ser-3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Container } from '@mui/material';
// import ArrowForwardSharpIcon from '@material-ui/icons';
// import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';





function Page4() {


    const array1 = [{
        image: ser1,
        title: "Child Nutrient"
    }, {
        image: ser2,
        title: "Food And Nutrition"
    }, {
        image: ser3,
        title: "Experties on Nutrition and Health"
    },]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        // ArrowForward: <ArrowForward />,
        // ArrowBack: <ArrowBack />,
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         initialSlide: 1
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]

    }

    return (
        <>
            <div className='page4'>
                <div className='page4topcontant'>
                    <h2>Our Services</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis.
                    </p>
                </div>

                <Slider {...settings}>
                    {array1.map((e) => {
                        return (
                            <div className='lkjh'>
                                <div className='page4div'>
                                    <div className='border'>
                                    <img className='image45' src={e.image} />
                                    </div>
                                    
                                    <div className='page4_contant'>
                                        <h2>
                                            {e.title}
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula<br /> eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient <br />montes, nascetur ridiculus mus.<br />
                                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,<br /> vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        </p>
                                        <span><button className='page4btn'>ABOUT ME</button></span>
                                    </div>
                                </div>

                            </div>

                        )
                    })}
                </Slider>
                {/* <ArrowBack  sx={{backgroundColor:'yellow'}}/>
                <ArrowForward /> */}
            </div>
        </>
    )
}

export default Page4

{/* */ }