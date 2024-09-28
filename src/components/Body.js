import Restrauntcards from "./RestrauntsCards";
import {CDN_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { FOOD_DELIVERY_API } from "../utils/constants";

const Body =()=>{
    // const arr = useState(restraList);
    // const tempRestra = arr[0];
    // const setListtempRestra = arr[1];// These are same
    const [tempRestra, setListtempRestra] = useState([]);// we are only destructuring here
    const [filterRestra, setfilterRestra] = useState([]);// we are destructuring

    const [searchText, setSearchText] =useState("");
    //console.log("body");

    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async ()=>{
        const data = await fetch(FOOD_DELIVERY_API);
        const json = await data.json();
        //console.log(json);
        //Optional Chainning
        setListtempRestra(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRestra(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }

        // if(tempRestra.length === 0){
        //     return <Shimmer/>
        // }

    return tempRestra.length === 0 ? <Shimmer/> : (
        <div className="Body">
            <div className="seacrh">
            <input type="text" placeholder="Search restaurants..." value ={searchText} onChange={(text)=>{
                setSearchText(text.target.value);

            }}/>
            <button type="button" className="search-btn" onClick={()=>{

                const filtered = tempRestra.filter((restra) => 
                    restra.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                    setfilterRestra(filtered);
            }}>Search</button>
            </div>
            <div className='filter'>
            <button id="filter-btn" type="button" onClick={()=>{
                
                const filtered=tempRestra.filter((restra) => restra.info.avgRating >= 4);
                setfilterRestra(filtered);
                //console.log(tempRestra);
            }}>Filter</button>
            </div>
            <div className='restraunt-container'>
               {
                 filterRestra.map((restraunt)=>(
                     <Link to={'restraunts/'+restraunt.info.id} key={restraunt.info.id} >
                     <Restrauntcards 
                     restra={{
                        resName : restraunt.info.name,
                        cusine : restraunt.info.cuisines,
                        rating : restraunt.info.avgRating,
                        deliveryTime : `${restraunt.info.sla.deliveryTime} minutes`,
                        costFortwo : restraunt.info.costForTwo,
                        image : `${CDN_URL}${restraunt.info.cloudinaryImageId}`

                     }}
                     />
                     </Link>
                 ))
 
               }
                
            </div>

        </div>
    )
}

export default Body;