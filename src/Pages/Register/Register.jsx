import { Link } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiEyeBold, PiEyeSlash } from 'react-icons/pi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const termsAccepted = form.get('terms');
        console.log(name, photo, email, password, termsAccepted);

        // reset error and success
        setRegisterError('');
        setSuccessMessage('');

        // password validation
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character');
            return;
        } else if (!/\d/.test(password)) {
            setRegisterError('Your password should have at least one numeric character');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            return;
        }
        else if (!termsAccepted) {
            setRegisterError('Please accept our terms & conditions!');
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccessMessage('You have registered successfully please click the login.');
                toast.success('You have registered successfully.', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });
    }
    return (
        <div>
            <div className="max-w-full mx-auto">
                <Navbar></Navbar>
                <div className="bg-no-repeat bg-cover pb-14" style={{ backgroundImage: 'url(https://i.ibb.co/C2JVkPz/wedding-banner.jpg)' }}>
                    <h2 className="text-3xl text-center py-5 font-semibold text-[#403F3F]">Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body bg-pink-200 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="form-control md:w-3/4 mx-auto">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-3/4 mx-auto">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                                    name="password" placeholder="Password" className="input w-full input-bordered" required />
                                <span className="absolute top-3 right-2 cursor-pointer"
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
                        <div className="p-1 md:w-3/4 mx-auto">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2 text-sm" htmlFor="">Accept our <a href="">Terms & condition.</a></label>
                        </div>
                        <div className="md:w-3/4 mx-auto">
                            {
                                registerError && <p className="text-red-500">{registerError}</p>
                            }
                            {
                                successMessage && <p className="text-green-600">{successMessage}</p>
                            }
                        </div>
                        <div className="form-control mt-6 md:w-3/4 mx-auto">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center mt-2 text-sm font-semibold ">Already Have An Account ? <Link to="/login" className="text-blue-700 font-bold">Login</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Footer></Footer>
        </div>
    );
};

export default Register;