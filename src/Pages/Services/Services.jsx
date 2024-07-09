import { useLoaderData } from "react-router-dom";
import AllServices from "./AllServices";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";


const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="bg-gradient-to-r from-[#f6c088] via-[#d27265] to-[#f3e3d5]">
                <h3 className="pt-10 text-center text-4xl font-bold">All Services</h3>
                {
                    services.map(service => <AllServices
                        key={service.id}
                        service={service}></AllServices>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;