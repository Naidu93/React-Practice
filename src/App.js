import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";



//Header Component



// Card Component



// Bodycontainer




const AppLayout =()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
                {
                    path:"/",
                    element:<Body />
                },
                 {
                 path:"/about",
                 element:<About />
                  },
                 {
                 path:"/cart",
                 element:<Cart />
                 },
                 {
                    path:"/restaurant",
                    element:<ResInfo />
                 }
        ]
    },
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

