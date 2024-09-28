
import React from 'react';
import ReactDom from 'react-dom/client';
import Body from './components/Body.js';
import Header from './components/tempHeader.js';
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import About from './components/about.js';
import Contact from './components/contact.js';
import Error from './components/error.js';
import RestrauntsMenu from './components/restrauntMenu.js';

const AppLayout = ()=>{
    return <div className="app">
            <Header/>
            <Outlet/>
    </div>
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: '/restraunts/:restraId',
                element:<RestrauntsMenu/>

            }
        ],
        errorElement:<Error/>
    }
    
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);