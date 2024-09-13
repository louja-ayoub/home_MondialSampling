import React, { useEffect, useRef } from 'react'
import oil_image from '../img/oil.jpg'
import MechanicalReliabilitySection from './MechanicalReliabilitySection'
import PdfCatalog from '../components/PdfCatalog'
import Achievement from './Aachievement'
import Products from './Products/ProductList'

export default function SamplingSection() {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-screen text-white"
                style={{ backgroundImage: `url(${oil_image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70 p-24">
                    <h1 className="text-4xl font-bold mb-1 text-center"> MONDIAL SAMPLING</h1>
                    <h2 className="text-xl font-bold mb-4 text-center text-teal-300"> Sampler | Divider | Crusher | Mining </h2>
                    <p className="text-2xl mb-4 text-white mt-10 text-center">
                        Since the beginning of 2000, we have specialised in the engineering and export of technical goods of all kinds.
                        Our customers include leading manufacturers in the cement and heavy industry sector, mainly in French-speaking countries.
                        In our company there are highly motivated employees, our representatives are always striving to satisfy our customers through quality and innovation.
                    </p>
                </div>
            </div>
            <MechanicalReliabilitySection />
            <PdfCatalog />
            <Products />
            <Achievement />
        </>
    );
}
