import React, { useState } from 'react'
import '../Product/ChildNutrition.css'
import { Container } from '@mui/material'
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import p1 from '../asset/p1.png'
import p2 from '../asset/p2.png'
import p3 from '../asset/p3.png'
import p4 from '../asset/p4.png'
import p5 from '../asset/p5.png'
import p6 from '../asset/p6.png'
import p7 from '../asset/p7.png'
import Footer from '../footer/Footer'
import { Link, useLocation, useParams } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top'
import DoneIcon from '@mui/icons-material/Done';



function ChildNutrition() {

    const location = useLocation()
    const { image, title, rate1, rate2 } = location.state

    const arrayproduct1 = [{
        image: p2,
        title: "Introduction To Healthy",
        rate1: "$26.99",
        rate2: " $22.49"
    },
    {
        image: p3,
        title: "Nutrition And Food",
        rate1: "$25.99",
        rate2: " $21.49"
    },
    {
        image: p4,
        title: "Expertise On Nutrition",
        rate1: "$24.99",
        rate2: " $20.49"
    },
    {
        image: p5,
        title: "Exercise For Health At Home",
        rate1: "$27.99",
        rate2: " $25.49"
    }]

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff3d47',

        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',

        },
    });

    const [activeTab, setActiveTab] = useState(1);

    function handleTabClick(id) {
        setActiveTab(id);
    }

    const [isActive, setActive] = useState(false);

    const handleclick = () => {
        setActive(!isActive);
    };


    return (
        <>

            <ScrollToTop smooth top="20" />
            <div className='ChildNutrition_menu'>

                <div className='ChildNutrition_menudiv'>
                    <h3 className='ChildNutrition_menuh3'>{title}</h3>
                    <p className='ChildNutrition_menup'>Free US Delivery on US Orders Over $35</p>
                    <p className='ChildNutrition_menup'>Curabitur rutrum nunc odio, et fermentum dui sollicitudin at. Nunc in diam sit amet nisl laoreet dictum sed nec lorem.</p>
                </div>
            </div>

            <Container className='ChildNutrition_container'>
                <div className='ChildNutrition_containerdiv'>

                    <img className='ChildNutrition_img' src={image} />

                    <div className='ChildNutrition_details'>
                        <h1 className='ChildNutrition_h1'>{title}</h1>

                        <Rating className='ChildNutrition_rating' name="size-medium" defaultValue={2} />
                        <span><strike style={{ color: "#888", fontSize: '1.3rem', marginLeft: "8px" }}>{rate1}</strike></span><span className='ChildNutrition_span1'>{rate2}</span>

                        <p className='ChildNutrition__p1'>Free US Delivery on US Orders Over $35</p>
                        <p className='ChildNutrition__p2'>Curabitur rutrum nunc odio, et fermentum dui sollicitudin at.<br /> Nunc in diam sit amet nisl laoreet dictum sed nec lorem.</p>
                        
                        <div style={{position:'relative'}}>
                        <input className='ChildNutrition_input' type="number" min="1" max="50"></input>
                        <span className='ChildNutrition_span2'><button className={isActive?'ChildNutrition_btn1':"ChildNutrition_btn"} onClick={handleclick} > ADD TO CART <DoneIcon className={isActive ?"doneicon" :null } /></button>
                        <a href='/Cart' className={isActive ? null : "ChildNutrition_viewcart"} style={{ color: 'black', fontSize: "20px", fontWeight: "500", textDecorationLine: "none" }}>View Cart</a></span><br />
                        </div>

                        <StyledRating
                            sx={{ marginTop: "0px" }}
                            name="customized-color"
                            defaultValue={0}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            max={1}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} fontSize="inherit"
                        />
                        <span style={{ fontSize: '1.2rem', fontWeight: '500', marginLeft: "8px", cursor: "pointer" }}>Add to Wishlist</span>
                        <p className='ChildNutrition__p3'>Category: <span className='ChildNutrition_span3'>Child Nutrition</span>
                            Tags:<span className='ChildNutrition_span3'> Diet Plan </span>,<span className='ChildNutrition_span3'> Healthy Meals</span></p>
                    </div>


                </div>
            </Container>

            <Container className='ChildNutrition_container1'>
                <div className="tabs">
                    <button style={{
                        width: '140px',
                        height: "50px",
                        border: "1px solid #d3ced2",
                        bordeRadius: "4px 4px 0 0",
                        margin: "0 -5px",
                        padding: "0 1em",
                        fontWeight: "700",
                        fontSize: "1rem"
                    }}
                        className={`tab-trigger ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Description
                    </button>
                    <button style={{
                        width: '140px',
                        height: "50px",
                        border: "1px solid #d3ced2",
                        bordeRadius: "4px 4px 0 0",
                        margin: "0 -5px",
                        padding: "0 1em",
                        fontWeight: "700",
                        fontSize: "1rem"
                    }}
                        className={`tab-trigger ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Reviews (0)
                    </button>
                    <div className='line'>

                    </div>
                    {/* ############# { Description content }  ##################### */}

                    <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
                        <h1>Description</h1>
                        <p className='description-p'>
                            Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus.<br />
                            Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                        </p>

                        <h4 className='description-h4'>Lorem ipsum dolor sit amet</h4>
                        <p className='description-p'>
                            Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <h4 className='description-h4'>Busey ipsum dolor sit amet</h4>
                        <p className='description-p'>
                            Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.
                        </p>

                        <h4 className='description-h4'>Sample Paragraph Text</h4>
                        <p className='description-p'>
                            Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros accumsan quis justo at tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus pulvinar. Vestibulum sit amet auctor ipsum.
                        </p>
                    </div>

                    {/* ############# { Reviews (0) content }  ##################### */}

                    <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
                        <h1>Reviews</h1>
                        <p className='revies-p'>There are no reviews yet.</p>

                        <h5 className='revies-h5'>Be the first to review “Introduction to Healthy”</h5>
                        <p className='revies-p'>Your email address will not be published. Required fields are marked *</p>

                        <p className='revies-p'>Your rating *</p>
                        <Rating sx={{ color: "rgb(1,123,254)" }} />

                        <p className='revies-p'>Your review *</p>
                        <textarea className='revies-textarea' /><br />

                        <label className='revies-lable'>Name *</label>
                        <input type="text" className='revies-input' /><br />

                        <label className='revies-lable'>Email *</label>
                        <input type="text" className='revies-input' /><br />

                        <input type="checkbox" className='revies-checkbox' />
                        <span className='revies-p'> Save my name, email, and website in this browser for the next time I comment.</span><br />

                        <button className='revies-btn'>Submit</button>
                    </div>
                </div>
            </Container>

            {/* ############# { Related Product }  ##################### */}

            <Container style={{ marginTop: "20px" }}>
                <h1>Related products</h1>
                <div className='relatedproduct-div'>
                    {arrayproduct1.map((e) => {
                        return (

                            <div className='relatedproduct'>
                                <span className='relatedproductspan'>Sale!</span>
                                <Link to={`/ChildNutrition`}
                                    state={{ image: e.image, title: e.title, rate1: e.rate1, rate2: e.rate2 }}
                                ><img className='relatedproductimg' src={e.image} /></Link>

                                <h2 className='relatedproducth2'>{e.title} </h2>

                                <Rating name="size-medium" defaultValue={2} className='relatedproductrating' /><br />

                                <strike>{e.rate1}</strike>{e.rate2}<br />
                                <button className='relatedproductbtn'>ADD TO CART</button><br />
                                <StyledRating
                                    sx={{ marginTop: "5px" }}
                                    name="customized-color"
                                    defaultValue={0}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    max={1}
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} fontSize="inherit"
                                />
                                <span style={{ fontSize: '1rem', fontWeight: '500', marginLeft: "0px", cursor: "pointer" }}>Add to Wishlist</span>
                            </div>

                        )
                    })}
                </div>
            </Container>
            <Footer />

        </>
    )
}

export default ChildNutrition
