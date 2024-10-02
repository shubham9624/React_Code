import {useState,useEffect} from 'react';
import {GITHUB_URL} from '../utils/constants';
const User =()=>{
   
    const [userdetail, setUserDetails] =useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

     const fetchData = async ()=>{
        const data = await fetch(GITHUB_URL);
        const json = await data.json();
        // console.log(json);
        setUserDetails(json);
    }
    const {name,location,avatar_url} = userdetail;
    return (
        <div>
           <img className='h-[150px] rounded-ee-3xl'src={avatar_url}></img>
            <h2 className='font-bold text-orange-400'>Name : {name}</h2>
            <h3 className='font-bold text-orange-400'>Location :- {location}</h3>
            <h3 className='font-bold text-orange-400'>Contact :- @shubham</h3>
        </div>
    )
};

export default User;