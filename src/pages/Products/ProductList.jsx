import React from 'react'
import products from './config';
import Product from '../../components/Product/Product';
import useLanguage from '../../locale/useLanguage';


const ProductList = () => {
    const translate = useLanguage();

    return (
        <section class="py-24 bg-gray-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center"> {translate('trending_products')} </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {products.map((item, index) => (
                        <Product key={index} product={item} />
                    ))}

                </div>
            </div>
        </section>

    )
}

export default ProductList;
