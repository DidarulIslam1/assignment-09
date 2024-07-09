import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiEyeBold, PiEyeSlash } from 'react-icons/pi';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // reset error and success
        setLoginError('');
        setSuccessMessage('');

        // password validation
        if (password.length < 6) {
            setLoginError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setLoginError('Your password should have at least one uppercase character');
            return;
        } else if (!/\d/.test(password)) {
            setLoginError('Your password should have at least one numeric character');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            setLoginError('Your password should have at least one special character');
            return;
        }

        signIn(email, password)
            .then(result => {
                setUser(result.user);
                setSuccessMessage('You have login successfully.')
                // console.log(result.user);

                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                setLoginError(error.message)
                // console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="max-w-full mx-auto">
                <Navbar></Navbar>
                <div className="bg-no-repeat bg-cover pb-14" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                    <h2 className="text-3xl text-center py-5 font-semibold text-[#403F3F]">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body bg-pink-200 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="form-control md:w-3/4 mx-auto">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-3/4 mx-auto">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full" required />
                                <span className="absolute top-4 right-2"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <PiEyeBold></PiEyeBold>
                                            :
                                            <PiEyeSlash></PiEyeSlash>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="md:w-3/4 mx-auto">
                            {
                                loginError && <p className="text-red-500">{loginError}</p>
                            }
                            {
                                successMessage && <p className="text-green-600">{successMessage}</p>
                            }
                        </div>
                        <div className="form-control md:w-3/4 mx-auto mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center mt-2 text-sm font-semibold">Do not Have An Account or new in this website please ? <Link to="/register" className="text-blue-700 font-bold">Register</Link></p>
                        <div className="border-t border-slate-400 mt-4 relative w-full md:w-3/4 mx-auto">
                            <FcGoogle className="absolute top-7 left-10 text-3xl"></FcGoogle>
                            <button onClick={handleGoogleSignIn} className="border border-slate-400 w-full mt-5 py-2 rounded-3xl text-lg">Sign in with Google</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;