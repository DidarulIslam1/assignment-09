import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <div className="hero h-[40rem]" style={{ backgroundImage: 'url(https://i.ibb.co/V2DQDmh/last.jpg)' }}>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold" data-aos="zoom-in">Hello there</h1>
                        <p className="mb-5 md:text-lg font-mono text-slate-700" data-aos="zoom-in">Discover the magic of <span className="font-bold"> <span className="text-xl md:text-2xl text-[#630107] font-bold"> F</span>orever <span className="text-xl md:text-2xl text-[#630107] font-bold">Y</span>ours</span>, where every detail is a brushstroke of perfection on the canvas of your love story. Our expert services, from stunning venue decorations to captivating photography, cater to every facet of your dream wedding. Immerse yourself in a celebration curated with care, where moments become memories, and your journey begins in elegance. Explore our offerings and let us craft the wedding of your dreams.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;