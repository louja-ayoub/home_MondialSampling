import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <Link to={`/productDetail/${product.id}`}
            class="relative bg-cover group rounded-xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer border border-gray-100">
            <img class="rounded-2xl object-cover" src={product.imageUrl} alt="jacket image" />
            <div
                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-gray-100 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50 opacity-90">
                <div class="flex items-center justify-between mb-2">
                    <h6 class="font-extrabold text-base leading-7 text-black"> {product.code} </h6>
                    <h6 class="font-semibold text-base leading-7 text-blue-600 text-right"> More detail </h6>
                </div>
            </div>
        </Link>
    );
}

export default Product;
