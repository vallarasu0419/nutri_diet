import React from 'react'
import '..//Blogs/Blogs.css'
import bl1 from '../asset/bl1.png'
import bl2 from '../asset/bl2.png'
import bl3 from '../asset/bl3.png'
import bl4 from '../asset/bl4.png'
import bl5 from '../asset/bl5.png'
import bl6 from '../asset/bl6.png'
import Nav from '../Nav/Nav'
import Page6 from '../page6/Page6'
import Footer from '../footer/Footer'


function Blogs() {

    const arrayblogs = [{
        image: bl1,
        title: "This Book is a treatise on the theory",

    }, {
        image: bl2,
        title: "Contrary to popular belief,Lorem Ipsum",

    },
    {
        image: bl3,
        title: "Lorem Ipsum which looks reasonable",

    },
    {
        image: bl4,
        title: "Surived not ony five centuries",

    },
    {
        image: bl5,
        title: "The points of using Lorem Ipsum",

    },
    {
        image: bl6,
        title: "It is a long established fact reader",

    }];

    return (
        <>
            <div className='blogsmenu'>
                <Nav />
                <div className='blogsmenudiv'>
                    <h3 className='blogsmenuh3'>Blogs</h3>
                    <p className='blogsmenup'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />
                        Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
            </div>
            <div className='mainblogs'>
                {arrayblogs.map((e) => {
                    return (
                        <div className='blogs'>
                            <img className='blogsimg' src={e.image} />
                            <h2 className='blogsh2'><a>{e.title}</a></h2>
                            <p className='blogsp'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of...</p>
                            <button className='blogsbtn'>READ MORE...</button>
                        </div>
                    )
                })}
            </div>
            <Page6 />
            <Footer />
        </>
    )
}

export default Blogs
