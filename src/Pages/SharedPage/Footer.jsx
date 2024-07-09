import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {


    return (
        <div>
            <footer className="bg-[#ede6d4] shadow dark:bg-gray-900 px-3">
                <div className="max-w-7xl mx-auto md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className='flex items-center cursor-pointer'>
                            <div className="flex items-center p-1 rounded-md">
                                <img className="w-14" src="https://i.ibb.co/xLRX8LW/Wedding-PNG-Clipart.png" alt="" />
                                <span className="font-bold text-[#630107] uppercase text-lg md:text-2xl lg:text-3xl">Forever Yours</span>
                            </div>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-base md:text-lg font-medium sm:mb-0 dark:text-gray-400 p-2">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6 text-xl md:text-2xl flex justify-start md:justify-center space-x-5'>
                        <div className='p-1 border-4 border-[#9e300a] rounded-full bg-[#f9ac91]  cursor-pointer text-[#1877F2]'>
                            <FaFacebookF></FaFacebookF>
                        </div>
                        <div className='p-1 border-4 border-[#9e300a] rounded-full bg-[#f9ac91]  cursor-pointer text-[#1DA1F2]'>
                            <FaTwitter></FaTwitter>
                        </div>
                        <div className='p-1 border-4 border-[#9e300a] rounded-full bg-[#f9ac91]  cursor-pointer text-[#962fbf]'>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm p-2 md:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline"><span className="font-bold"> <span className="text-xl text-[#630107] font-bold"> F</span>orever <span className="text-xl text-[#630107] font-bold">Y</span>ours</span>™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;