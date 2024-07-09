import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";


const ServiceDetail = () => {
    const { id } = useParams();
    const cardData = useLoaderData();
    const singleCard = cardData.find(card => card.id === parseInt(id));
    console.log(singleCard);
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-[#fc9c78] via-[#d65b64] to-[#f0e6e9] min-h-screen">
                <h1 className="text-center py-10 text-4xl font-bold">Service Detail</h1>
                <div className="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-3/4 mx-auto">
                    <div className="">
                        <img className="object-cover" src={singleCard.img} alt="" />
                    </div>
                    <div className="p-4">
                        <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{singleCard.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{singleCard.details}</p>
                        <p className="font-bold">{singleCard.price}</p>
                        <button className="mt-3 btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            Go Confirm
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetail;