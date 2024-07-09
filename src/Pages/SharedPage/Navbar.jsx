import userPic from '../../assets/user.png'
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => console.log('User logged out...'))
            .catch(error => console.log(error))
    }

    const navLink = <>
        <li className="text-base md:text-lg mr-3"><NavLink to="/">Home</NavLink></li>
        <li className="text-base md:text-lg mr-3"><NavLink to="/about">About</NavLink></li>
        <li className="text-base md:text-lg mr-3"><NavLink to="/services">Services</NavLink></li>
        {
            user && <>
                <li className="text-base md:text-lg mr-3"><NavLink to="/blogs">Blog</NavLink></li>
                <li className="text-base md:text-lg"><NavLink to="/profile">Profile</NavLink></li>
            </>
        }
    </>
    return (
        <div className="max-w-full mx-auto">
            <div className="navbar bg-gradient-to-r from-[#fc9c78] bg-[#f0e6e9] md:px-2 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className="flex items-center p-1 rounded-md cursor-pointer" title='Our Commitment, Your Happiness'>
                        <img className="w-14 lg:w-16 rounded-lg" src="https://i.ibb.co/xLRX8LW/Wedding-PNG-Clipart.png" alt="" />
                        <span className="uppercase text-[#630107] text-lg md:text-2xl lg:text-3xl font-bold">FOREVER YOURS
                        </span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userPic} />
                        </div>
                    </label>
                    {
                        user ?
                            <>
                                <div className='relative'>
                                    <button onClick={handleSignOut} className="btn text-base md:text-lg">Sign out</button>
                                    <small className='absolute top-12 right-6'>{user.email}</small>
                                </div>
                            </>
                            :
                            <Link to="/login">
                                <button className="btn text-base md:text-lg">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;