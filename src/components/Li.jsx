
import { Link } from 'react-router-dom';

const Li = ({ to, title }) => {
    return (<li>
        <Link
            to={to}
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100
           hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
           lg:hover:text-teal-700 lg:p-0 dark:text-gray-400
            lg:dark:hover:text-white dark:hover:bg-gray-700 
            dark:hover:text-white lg:dark:hover:bg-transparent 
            dark:border-gray-700 font-extrabold">
            {title} </Link>
    </li>)
}


export default Li;