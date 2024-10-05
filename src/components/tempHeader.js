import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
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
    const {loggedInUser} = useContext(UserContext);

    //Selector For subcscribe to store for redux  using selector
    const cartItem = useSelector((store)=> store.cart.items);
    console.log(cartItem);

    const handleClick = ()=>{
        tempBtn === 'Log In'?setBtn('Log Out'):setBtn('Log In');
    }
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg sm-'>
            <div className='logo-container'>
                <Link to="/">
                <img 
                className="w-56 " 
                src={LOGO_URL}></img>
                </Link>
            </div>
            <div 
                className='flex items-center '>
                <ul className="flex p-12 m-4 space-x-2">
                    <li className="px-3 font-semibold  text-gray-700">
                        {onlineStatus ? "Online ✅":"Offline ❌"}
                    </li>
                    <li  className=" font-semibold px-4 shadow-lg rounded-xl bg-yellow-500 text-gray-700 hover:text-red-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li   className="font-semibold px-4 shadow-lg rounded-xl bg-yellow-500 text-gray-700  hover:text-red-500">
                        <Link to="/about">About Us</Link>
                        </li>
                    <li   className="font-semibold px-4 shadow-lg rounded-xl bg-yellow-500 text-gray-700  hover:text-red-500">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li   className="font-semibold px-4 shadow-lg rounded-xl bg-yellow-500 text-gray-700  hover:text-red-500">
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <Link to='/cart'>
                    <li className="font-semibold px-4 shadow-lg rounded-xl bg-yellow-500 text-gray-700  hover:text-red-500">Cart - {cartItem.length}</li>
                    </Link>

                    <li   className="font-semibold px-4  shadow-lg rounded-xl bg-yellow-500 text-gray-700  hover:text-red-500">
                        <button className="Login" onClick={handleClick}>{tempBtn}
                    </button>
                    </li>
                    <li className="px-4 font-bold text-green-600">{loggedInUser}</li>
                </ul>
            </div>
        </div>  
    )
}
export default Header;