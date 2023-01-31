import { Card } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import '..//full_project/ExampleSlide.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExampleSlide = () => {
    const slider = React.useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    const [count, setCount] = React.useState(0);

    const components = [
        <div className='slidecard'>1</div>,
        <div className='slidecard'>2</div>,
        <div className='slidecard'>3</div>,
        <div className='slidecard'>4</div>,
        <div className='slidecard'>5</div>,
        <div className='slidecard'>6</div>,
        <div className='slidecard'>7</div>,
        <div className='slidecard'>8</div>
    ]

    return (
        <>

            <div>
                <div className='slidediv'>
                    {

                        components[count]
                    }
                </div>

                {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}


                {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}

                </div> 

            <h1 className=''>ExampleSlide</h1>
            <div className='fulldiv'>
                <div className='btn3'><button onClick={() => slider?.current?.slickNext()}><ArrowBackIcon /></button></div>
                <div className='btn1'><button onClick={() => slider?.current?.slickPrev()}><ArrowForwardIcon /></button></div>
                <div className='slidediv'>

                    <Slider className='btn2' ref={slider} {...settings}>
                        <div className='slidecard'>
                            card1
                        </div>
                        <div className='slidecard'>
                            card2
                        </div>
                        <div className='slidecard'>
                            card3
                        </div>
                        <div className='slidecard'>
                            card4
                        </div>
                        <div className='slidecard'>
                            card5
                        </div>
                        <div className='slidecard'>
                            card6
                        </div>
                    </Slider>
                    
                </div>
            </div>
        </>
    )
}

export default ExampleSlide
