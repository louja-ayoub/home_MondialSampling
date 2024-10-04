import React, { useState } from 'react';
import catalogFr01 from '../img/catalogs/catalog-fr-01.jpg'
import catalogFr02 from '../img/catalogs/catalog-fr-02.jpg'
import catalogEn01 from '../img/catalogs/catalog-en-01.jpg'
import catalogEn02 from '../img/catalogs/catalog-en-02.jpg'
import useLanguage from '../locale/useLanguage';
import { selectLangCode } from "../redux/translate/selectors";
import { useSelector } from 'react-redux';

const PdfCatalog = () => {
    const translate = useLanguage();
    const langCode = useSelector(selectLangCode)

    // Define state for the current page
    const [page, setPage] = useState(1);

    // Define the image URLs
    const catalogFr = {
        1: catalogFr01, // Replace with your English image URL
        2: catalogFr02,  // Replace with your French image URL
    };

    const catalogEn = {
        1: catalogEn01, // Replace with your English image URL
        2: catalogEn02,  // Replace with your French image URL
    };

    // Choose the catalog based on the language code
    const catalog = langCode === 'fr_fr' ? catalogFr : catalogEn;

    // Function to handle page change
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            {/* Title Section */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                {translate('explore_our_catalog')}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
                {translate('find_your_perfect_product_in_our_collection')}
            </p>
            {/* Pagination Controls */}
            <div className="my-6 flex space-x-4">
                <button
                    onClick={() => handlePageChange(1)}
                    className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                >
                    1
                </button>
                <button
                    onClick={() => handlePageChange(2)}
                    className={`px-4 py-2 rounded-lg ${page === 2 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300`}
                >
                    2
                </button>
            </div>
            {/* Display the image based on the selected page */}
            <div className="w-full max-w-5xl">
                <img
                    src={catalog[page]}
                    alt={page === 1 ? 'English Version' : 'Version Française'}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Pagination Controls */}
            <div className="mt-6 flex space-x-4">
                <button
                    onClick={() => handlePageChange(1)}
                    className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                >
                    1
                </button>
                <button
                    onClick={() => handlePageChange(2)}
                    className={`px-4 py-2 rounded-lg ${page === 2 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300`}
                >
                    2
                </button>
            </div>
        </div>
    );
};

export default PdfCatalog;
