import React from 'react';
import image1 from '../img/ingeproa_sampling_01.jpg'
import image2 from '../img/ingeproa_sampling_02.jpg'
import image3 from '../img/ingeproa_sampling_04.jpg'
import image4 from '../img/ingeproa_sampling_05.jpg'
import useLanguage from '../locale/useLanguage';

export default function MechanicalReliabilitySection() {
    const images = [image1, image2, image3, image4]
    const translate = useLanguage();
    return (
        <div className="max-w-screen-xl mx-auto px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-8">

                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4"> {translate('benefits_of_mondial_sampling_systems')} </h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        {
                            translate('benefits_of_mondial_sampling_systems_list').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }

                    </ul>
                </div>

                {/* Image Grid Section */}
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Mechanical reliability image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                    ))}
                </div>

            </div>
        </div>
    );
}
