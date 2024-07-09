import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-[#f6c088] via-[#d27265] to-[#f3e3d5] min-h-screen" data-aos="fade-right">
                <h3 className="pt-10 text-center text-4xl font-bold">Stories...</h3>
                <div className="max-w-7xl mx-auto pt-20 px-5">
                    <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3">
                        <div className="bg-pink-300 md:flex-1">
                            <img className="object-cover h-full" src="https://i.ibb.co/JFHnDnv/blog1-300.webp" alt="" />
                        </div>
                        <div className="p-5 md:flex-1 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                            <div className="text-start md:text-lg font-mono text-slate-600">
                                <h3 className="text-xl md:text-2xl">A Fairytale Wedding Under the Stars</h3>
                                <small>2023-05-15</small>
                                <p className="text-xl font-bold">Emily and James</p>
                                <p className="text-sm mt-3">Emily and James celebrated their love under the twinkling stars in a magical outdoor ceremony. The enchanting venue, adorned with fairy lights and floral arches, set the stage for a night filled with love, laughter, and unforgettable moments.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto flex justify-center pt-20 px-5">
                    <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3">
                        <div className="bg-pink-300 md:flex-1">
                            <img className="object-cover h-full" src="https://i.ibb.co/JFHnDnv/blog1-300.webp" alt="" />
                        </div>
                        <div className="p-5 md:flex-1 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                            <div className="text-start md:text-lg font-mono text-slate-600">
                                <h3 className="text-xl md:text-2xl">Capturing Love in Every Frame</h3>
                                <small>2023-06-28</small>
                                <p className="text-xl font-bold">Olivia and Michael</p>
                                <p className="text-sm mt-3">Olivia and Michael wedding was a visual delight, with breathtaking moments captured by our talented photographers. From the emotional exchange of vows to the lively dance floor, every frame tells the story of a day filled with joy and romance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto flex justify-end pt-20 pb-20 px-5">
                    <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3">
                        <div className="bg-pink-300 md:flex-1">
                            <img className="object-cover h-full" src="https://i.ibb.co/JFHnDnv/blog1-300.webp" alt="" />
                        </div>
                        <div className="p-5 md:flex-1 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                            <div className="text-start md:text-lg font-mono text-slate-600">
                                <h3 className="text-xl md:text-2xl">A Culinary Journey of Love</h3>
                                <small>2023-08-12</small>
                                <p className="text-xl font-bold">Sophie and Ethan</p>
                                <p className="text-sm mt-3">Sophie and Ethan treated their guests to a culinary masterpiece, with a menu tailored to their unique tastes. From appetizers to desserts, every dish was a celebration of love and shared moments, creating a wedding feast to be remembered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;