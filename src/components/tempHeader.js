import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

 const Header = ()=>{

    let [tempBtn, setBtn] =useState("Log In");
    //console.log("header rendered");

    /* If dependencies array is not present useEffect will call every componnent renderi
       if dependencies array is empty then useEffect will call only on intial render
       if dependencies array is not empty then useEffect will call only on when dependencies is updated */

    useEffect(()=>{
        //console.log("useEffect called");
    },[tempBtn]);
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to="/">
                <img 
                id="logo" 
                src={LOGO_URL}></img>
                </Link>
            </div>
            <div 
            className='nav-Items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li><button className="Login" onClick={()=>{
                           tempBtn === 'Log In'?setBtn('Log Out'):setBtn('Log In');
                    }

                    }>{tempBtn}</button></li>
                </ul>
            </div>
        </div>  
    )
}
export default Header;