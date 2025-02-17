import { Link } from "react-router-dom";
import { HOME_PATH } from '@Routes';

export function NoMatchFound() {
    return (
        <div className="p-20 w-full flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div className="w-full lg:w-1/2 mx-8">
                    <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8 text-white/80">
                        Sorry we couldn't find the page you're looking for
                    </p>
                    <Link to={HOME_PATH} className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-md focus:outline-none bg-green-700 hover:bg-green-600">
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}