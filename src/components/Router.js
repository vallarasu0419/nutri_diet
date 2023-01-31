import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Blogs from './Blogs/Blogs'
// import Fullproject from './full_project/Fullproject'
import ChildNutrition from './Product/ChildNutrition'
// import Product from './Product/Product'
import Cart from './Nav/Cart'
const Fullproject = React.lazy(() => import('./full_project/Fullproject'));
const Product = React.lazy(() => import('./Product/Product'));



function PageRoutes() {


  return (
    <div>
      {/* <div>
            {arrayproduct.map(e => (
                <Product key={e.id} product={e} />
            ))}
            </div>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<React.Suspense fallback={<>.....</>}>
          <Fullproject />
          </React.Suspense>} />

          <Route path="/Product" element={<React.Suspense fallback={<>loading...</>}>
            <Product />
          </React.Suspense>} />

          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ChildNutrition" element={<ChildNutrition />} />
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path="/" element={<Fullproject />}/> */}
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default PageRoutes
