import React from 'react';
import oil_indus_img from '../img/oil_indus.jpg'; // Ensure the image path is correct

function About() {
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
                    <h2 className="text-4xl font-extrabold mb-6">About our company</h2>
                    <p className="text-lg mb-16">
                        Since the beginning of 2000, we have specialised in the engineering and export of technical goods of all kinds.
                        Our customers include leading manufacturers in the cement and heavy industry sector, mainly in French-speaking countries.
                        In our company there are highly motivated employees, our representatives are always striving to satisfy our customers through quality and innovation.
                        Our product range extends from technical advice and spare parts supply of any kind to the delivery of complete machines and systems.
                        We see our customers as partners who help us to provide better service with suggestions and improvements.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
