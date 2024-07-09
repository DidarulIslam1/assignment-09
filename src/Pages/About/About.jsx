import { useEffect } from "react";
import Footer from "../SharedPage/Footer";
import Navbar from "../SharedPage/Navbar";

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <section className="bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/c2K5Hng/w-photography.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" data-aos="fade-right">Our passion lies in shaping a better future for all.</h1>
                    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" data-aos="fade-left">Welcome to <span className="text-white">FOREVER YOURS</span>, where we strive to make your wedding day truly unforgettable. With a team of dedicated professionals, we offer a range of services to meet all your wedding needs.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;