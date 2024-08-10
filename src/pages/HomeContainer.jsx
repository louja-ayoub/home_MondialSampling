import React, { useEffect, useRef } from 'react'
import oil_image from '../img/oil.jpg'
import MechanicalReliabilitySection from './MechanicalReliabilitySection';

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
                        From individual pieces of equipment through to turnkey systems, we provide sampling systems to be incorporated into plants handling particulate solids or slurries. Furthermore, at Ingeproa, we take the time to understand your process and offer the best possible solution rooted in sampling standards and experience-driven best practices related to material handling.
                    </p>
                </div>
            </div>
            <MechanicalReliabilitySection /></>
    );
}
