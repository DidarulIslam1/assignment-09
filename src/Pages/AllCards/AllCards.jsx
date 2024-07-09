import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AllCards = ({ cards }) => {
    const { id, title, img, details } = cards;

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="" data-aos="zoom-in">
            <div className="flex flex-col border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="h-80 w-full" src={img} alt="" />
                </a>
                <div className="p-5 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <div className="">
                        <div>
                            {
                                details.length > 100 ?
                                    <p className="mb-3 font-normal text-slate-800 dark:text-gray-400">{details.slice(0, 100)} <Link
                                        to={`/serviceDetail/${id}`}
                                        className="font-bold"
                                    ><span className="text-blue-600 font-bold">read more...</span>
                                    </Link></p>
                                    :
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                            }
                        </div>

                    </div>
                    <div className="mt-auto">
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Link to={`/serviceDetail/${id}`}>Service detail</Link>
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
AllCards.propTypes = {
    cards: PropTypes.object.isRequired
}
export default AllCards;