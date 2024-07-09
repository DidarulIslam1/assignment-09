import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AllServices = ({ service }) => {
    const { title, img, details } = service;

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="" data-aos="zoom-in">
            <div className="flex flex- justify-center px-5 py-10">
                <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3">
                    <div className="bg-pink-300 md:flex-1">
                        <img className="object-cover h-full" src={img} alt="" />
                    </div>
                    <div className="p-5 md:flex-1 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                        <div className="text-start space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                            <p className="font-normal text-slate-800">{details}</p>
                            <div className="lg:pt-8">
                                <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                    Go Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllServices.propTypes = {
    service: PropTypes.object.isRequired
}
export default AllServices;
