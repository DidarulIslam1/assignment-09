import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Profile from "../Pages/Profile/Profile";


const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/serviceDetail/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: () => fetch('/data.json')

            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default myCreateRouter;