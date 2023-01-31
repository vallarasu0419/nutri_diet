import { Card, Grid, Paper } from '@mui/material'
import React from 'react'
import '..//page6/Page6.css'
import t4 from '../asset/t4.png'
import t2 from '../asset/t2.png'
import t1 from '../asset/t1.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Page6() {

    const array4 = [{
        image: t4,
        title: "JERZZY LAMOT",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,..."
    }, {
        image: t2,
        title: "JERZZY LAMOT",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,..."
    }, {
        image: t1,
        title: "JERZZY LAMOT",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,..."
    }, {
        image: t4,
        title: "JERZZY LAMOT",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,..."
    }, {
        image: t2,
        title: "JERZZY LAMOT",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,..."
    }, {
        image: t1,
        title: "JERZZY LAMOT",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,..."
    }];

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className='page6'>
                <h1 className='page6head'>Honest Review of Our Clients</h1>
                <p className='page6para'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>

                <div className='sliders'>
                    <Slider {...settings}>

                        {array4.map((e) => {
                            return (

                                <Grid className='page6div'>
                                    <div className='page6outer'>
                                        <div className='page6inner'>
                                            <img src={e.image} className="page6image" />
                                        </div>
                                    </div>

                                    <h4 className='page6h4'>{e.title}</h4>
                                    <p className='page6p'>{e.para}</p>
                                </Grid>


                            )
                        })}

                    </Slider>
                </div>

            </div>

        </>


    )
}

export default Page6
