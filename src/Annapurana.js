
import React, {lazy,Suspense, useEffect, useState} from 'react';
import ReactDom from 'react-dom/client';
import Body from './components/Body.js';
import Header from './components/tempHeader.js';
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import About from './components/about.js';
import Contact from './components/contact.js';
import Error from './components/error.js';
import RestrauntsMenu from './components/restrauntMenu.js';
import { lazy } from 'react';
import UserContext from './utils/userContext.js';
//provide to store to react
import {Provider} from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/cart.js';

//chunking
const Grocery = lazy(() => import('./components/grocery.js'));

const AppLayout = ()=>{

    const[userInfo,setUserInfo] = useState();

    useEffect(() =>{
        const data ={
            name: "Sam",
        }
        setUserInfo(data.name);
    },[]);
    return (
       <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser : userInfo , setUserInfo}}>
            <div className="app">
                    <Header/>
                    <Outlet/>
            </div>
        </UserContext.Provider>
       </Provider>
    )
     
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
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
            },
            {
                path: '/restraunts/:restraId',
                element:<RestrauntsMenu/>

            },
            {
                path: '/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
    
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);