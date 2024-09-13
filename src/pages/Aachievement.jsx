import React from 'react';

function Achievement() {
    return (
        <section className="bg-gray-100 py-32">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Our Achievements</h2>
                <div className="flex flex-col md:flex-row justify-center items-center mx-6 gap-4">
                    <div className="p-6 bg-white shadow-lg rounded-lg w-60 md:w-1/3">
                        <h3 className="text-2xl font-bold text-teal-500">Years of Experience</h3>
                        <p className="text-4xl font-bold mt-4">20+</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg w-60 md:w-1/3">
                        <h3 className="text-2xl font-bold text-teal-500">Completed Projects</h3>
                        <p className="text-4xl font-bold mt-4">4,000+</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg w-60 md:w-1/3">
                        <h3 className="text-2xl font-bold text-teal-500">Represented Worldwide</h3>
                        <p className="text-4xl font-bold mt-4">10+</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievement;
