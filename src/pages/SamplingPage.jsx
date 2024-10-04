import React from 'react';
import useLanguage from '../locale/useLanguage';

function SamplingPage() {
    const translate = useLanguage();

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
                        {translate('equipment_description')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        {translate('importance_of_samples')}
                    </p>

                    {/* Subheading */}
                    <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">
                        {translate('sampling_mining_aggregates')}
                    </h2>

                    <p className="text-lg text-gray-700">
                        {translate('mining_industry_description')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SamplingPage;
