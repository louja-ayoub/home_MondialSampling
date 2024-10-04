import React, { useEffect, useRef } from 'react'
import oil_image from '../img/oil.jpg'
import MechanicalReliabilitySection from './MechanicalReliabilitySection'
import PdfCatalog from '../components/PdfCatalog'
import Achievement from './Aachievement'
import Products from './Products/ProductList'
import useLanguage from '../locale/useLanguage'

export default function SamplingSection() {
    const translate = useLanguage();

    return (
        <>
            <div
                className="relative bg-cover bg-center h-screen text-white"
                style={{ backgroundImage: `url(${oil_image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70 md:p-24 sm:p-16">
                    <h1 className="md:text-3xl lg:text-4xl sm:text-2xl font-bold mb-1 text-center mt-4 " translate="no"> MONDIAL SAMPLING</h1>
                    <h2 className="md:text-xl sm:text-sm font-bold md:mb-4 sm:mb-2 text-center text-teal-300" translate='no'> Sampler | Divider | Crusher | Mining </h2>
                    <p className="md:text-xl lg:text-2xl sm:text-md mb-4 text-white text-center mt-8 md:mt-10">
                        {translate('company_description')}
                    </p>
                </div>
            </div>
            <MechanicalReliabilitySection />
            <PdfCatalog />
            <Products />
            {/* <Achievement /> */}
        </>
    );
}
