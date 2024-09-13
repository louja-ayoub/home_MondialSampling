import React from 'react';

function SamplingPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <h1 className="text-4xl font-bold text-teal-600 text-center mb-8">
                    SAMPLING
                </h1>

                {/* Description */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <p className="text-lg text-gray-700 mb-6">
                        From individual pieces of equipment through to turnkey systems, we provide sampling systems to be incorporated into plants handling particulate solids or slurries. Furthermore, at <strong>Mondial Sampling</strong> we take the time to understand your process and offer the best possible solution rooted in sampling standards and experience-driven best practices related to material handling.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        The importance of collecting correct and representative samples that packages the optimum blend of sampling fit for your site and application needs.
                    </p>

                    {/* Subheading */}
                    <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">
                        Sampling in Mining & Aggregates Industry
                    </h2>

                    <p className="text-lg text-gray-700">
                        We provide industry-specific solutions tailored to the challenges faced in the mining and aggregates industry, ensuring representative sampling that aligns with the demands of your operation. Our sampling systems are designed to meet the toughest requirements for accuracy and consistency.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SamplingPage;
