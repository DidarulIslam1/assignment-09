import Footer from "../SharedPage/Footer";
import Navbar from "../SharedPage/Navbar";
import userPic from "../../assets/user.png"


const Profile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gradient-to-r from-[#f6c088] via-[#d27265] to-[#f3e3d5] min-h-screen">
                <div className="max-w-7xl mx-auto p-5 md:p-20 ">
                    <div className="w-full md:w-2/3 lg:w-1/2 bg-pink-200 rounded-lg p-10 space-y-5">
                        <h1 className="text-4xl font-bold">Your Profile</h1>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={userPic} />
                            </div>
                        </label>
                        <div className="bg-white p-5 rounded-lg font-bold">
                            <p>Name:_____________</p>
                            <p>Cell:_____________</p>
                            <small>Email:____________</small>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;