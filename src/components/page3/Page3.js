import React from 'react'
import '../page3/Page3.css'
import page3img from '../asset/page3bg.png'
import w1 from '../asset/w1.png'
import w2 from '../asset/w2.png'
import w3 from '../asset/w3.png'
import w4 from '../asset/w4.png'


function Page3() {


  const asdf = document.querySelectorAll(".page3_contant")

  const obser = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("showed", entry.isIntersecting)
    })
  }, {
    threshold: 1
  })

  asdf.forEach(asdf => {
    obser.observe(asdf)
  })


  const skills = document.querySelectorAll(".skill")

  const obsers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("showseds", entry.isIntersecting)
    })
  }, {
    threshold: 0.5
  })

  skills.forEach(skills => {
    obsers.observe(skills)
  })

  const array = [{
    image: w1,
    title: "100% Results"
  }, {
    image: w2,
    title: "Expertise"
  }, {
    image: w3,
    title: "Certified"
  }, {
    image: w4,
    title: "Healthy"
  }];

  return (
    <>

      <div className='asdf'>
        <div className='page3_contant showed'>
          <h1>Why Choose Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br />
            Aenean massa. Cum sociis natoque penatibus et magnis.
          </p>
        </div>

        <div className='skill showeds'>
          {array.map((e) => {
            return (
              <div className='outer'>

                <div className='inner'>

                  <img style={{ padding: '15px' }} src={e.image} />
                </div>
                <h3>{e.title}</h3>
              </div>
            )
          })}
        </div>
      </div>



    </>
  )
}

export default Page3
