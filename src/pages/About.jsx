import React from 'react';
import oil_indus_img from '../img/oil_indus.jpg'; // Ensure the image path is correct
import useLanguage from '../locale/useLanguage';

function About() {
    const translate = useLanguage();

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16"
            style={{
                backgroundImage: `url(${oil_indus_img})`, // Correct syntax to set background image
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background Overlay */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-left text-white">
                    <h2 className="text-4xl font-extrabold mb-6"> {translate('about_our_company')} </h2>
                    <p className="text-lg mb-16">
                        {translate('company_description')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
