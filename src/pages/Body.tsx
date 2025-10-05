import {createBrowserRouter } from "react-router-dom"
import Login from "./LoginPage";
import Header from "./Header";
import Browser from "./Browser";
import { RouterProvider } from "react-router-dom";
import SignUp from "../pages/SignupPage";

const Body  = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <Login />
        }, 
        {
            path: "/browse",
            element: <Browser />
        },
        {
            path: "/signup",
            element: <SignUp />
        }
    ])
    return (
        <> 
           <RouterProvider router={appRouter} />
        </>
    ) 
}

export default Body;