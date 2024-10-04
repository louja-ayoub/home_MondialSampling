import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import HomeContainer from './HomeContainer'
import Products from './Products/ProductList'
import ProductDetail from '../components/Product/ProductDetail'
import products from './Products/config';
import SamplingPage from './SamplingPage';
import About from './About';
import Contact from './Contact'
import PrivacyPolicy from './PrivacyPolicy'
import PageNotFound from './PageNotFound'

export default function Home() {

    return (
        <div className='overflow-y-auto'>
            <Header></Header>
            <main className="w-full">
                <Suspense fallback={"..."}>
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/sampling" element={<SamplingPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacyPolicy" element={< PrivacyPolicy />} />
                        <Route path="/productDetail/:id" element={<ProductDetail products={products} />} />
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div >
    )
}
