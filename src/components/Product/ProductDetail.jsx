import { Link, useParams } from "react-router-dom";
import useLanguage from "../../locale/useLanguage";
import { selectLangCode } from "../../redux/translate/selectors";
import { useSelector } from "react-redux";



const ProductDetail = ({ products }) => {

    const translate = useLanguage();
    const langCode = useSelector(selectLangCode)
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const changeImage = (src) => {
        document.getElementById('mainImage').src = src;
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-16 py-20">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-0">
                        <img src={product.imageUrl}
                            alt="Product" className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
                        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                            {/* <img src=""
                                alt="Thumbnail 1" className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onClick={() => changeImage()} /> */}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-3xl font-bold mb-2"> {product.code} </h2>
                        <p className="text-gray-600 mb-4"> {product.name} </p>
                        <p className="text-gray-600 mb-4"> <strong> {translate('categories')}:</strong> {product.category} </p>
                        {/* <div className="mb-4">
                            <span className="text-2xl font-bold mr-2">$349.99</span>
                            <span className="text-gray-500 line-through">$399.99</span>
                        </div> */}
                        {/* Ratings */}
                        <div className="flex items-center mb-4">
                            {/* Repeat SVGs for stars */}
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-6 h-6 text-yellow-500">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd" />
                                </svg>
                            ))}
                            <span className="ml-2 text-gray-600">4.5 (120 {translate('reviews')}) </span>
                        </div>

                        <p className="text-gray-700 mb-6">
                            {product.description[langCode]}
                        </p>

                        {/* Color Selection */}
                        {/* <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Color:</h3>
                            <div className="flex space-x-2">
                                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                <button className="w-8 h-8 bg-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"></button>
                                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                            </div>
                        </div> */}

                        <Link to={'/contact'}>
                            <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-teal-600 transition duration-300">
                                {translate('contact_us_for_more_info')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;