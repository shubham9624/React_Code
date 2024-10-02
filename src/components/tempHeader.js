import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 const Header = ()=>{

    const [tempBtn, setBtn] =useState("Log In");
    //console.log("header rendered");

    /* If dependencies array is not present useEffect will call every componnent renderi
       if dependencies array is empty then useEffect will call only on intial render
       if dependencies array is not empty then useEffect will call only on when dependencies is updated */

    useEffect(()=>{
        //console.log("useEffect called");  
    },[tempBtn]);

    const onlineStatus = useOnlineStatus();
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg'>
            <div className='logo-container'>
                <Link to="/">
                <img 
                className="w-56 " 
                src={LOGO_URL}></img>
                </Link>
            </div>
            <div 
                className='flex items-center '>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        {onlineStatus ? "Online ✅":"Offline ❌"}
                    </li>
                    <li  className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li  className="px-4">
                        <Link to="/about">About Us</Link>
                        </li>
                    <li  className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li  className="px-4">
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li  className="px-4">Cart</li>
                    <li  className="px-4">
                        <button className="Login" onClick={()=>{
                           tempBtn === 'Log In'?setBtn('Log Out'):setBtn('Log In');
                    }
                    }>{tempBtn}
                    </button>
                    </li>
                </ul>
            </div>
        </div>  
    )
}
export default Header;