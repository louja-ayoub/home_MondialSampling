import React from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../locale/useLanguage';

const NotFound = () => {
    const translate = useLanguage();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6"> {translate('page_not_found')}</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
                {translate('page_not_found_description')}
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
            >
                {translate('go_to_home')}
            </Link>
        </div>
    );
};

export default NotFound;
