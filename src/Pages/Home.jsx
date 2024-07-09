import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./SharedPage/Footer";
import Navbar from "./SharedPage/Navbar";
import AllCards from "./AllCards/AllCards";


const Home = () => {
    const cards = useLoaderData();

    return (
        <div>
            <div className="max-w-full mx-auto">
                <Navbar></Navbar>
                <div className="">
                    <Banner></Banner>
                </div>
                <div className="bg-gradient-to-r from-[#f6c088] via-[#d27265] to-[#f3e3d5] min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-6 pt-6 md:pt-20 max-w-7xl mx-auto pb-6 md:pb-20">
                        {
                            cards.map(card => <AllCards
                                key={card.id}
                                cards={card}
                            ></AllCards>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;