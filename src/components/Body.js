import Restrauntcards from "./RestrauntsCards";
import restList from "../utils/mockData";
import {CDN_URL} from "../utils/constants";
import { useState } from "react";

const Body =()=>{
    // const arr = useState(restraList);
    // const tempRestra = arr[0];
    // const setListtempRestra = arr[1];// These are same
    let [tempRestra, setListtempRestra] = useState(restList.restaurants);// we are only destructuring here
    return (
        <div className="Body">
            <div className="seacrh">
            <input type="text" placeholder="Search restaurants..." />
            <button id="search-btn" type="button" onClick={()=>{
                
                const filtered=tempRestra.filter((restra) => restra.info.avgRating >= 4);
                setListtempRestra(filtered);
                console.log(tempRestra);
            }}>Filter</button>
            </div>
            <div className='restraunt-container'>
               {
                 tempRestra.map((restraunt)=>(
                     <Restrauntcards 
                     key={restraunt.info.id} 
                     restra={{
                        resName : restraunt.info.name,
                        cusine : restraunt.info.cuisines,
                        rating :restraunt.info.avgRating,
                        deliveryTime :restraunt.info.sla.deliveryTime,
                        image : `${CDN_URL}${restraunt.info.cloudinaryImageId}`

                     }}
                     />
                 ))
 
               }
                
            </div>

        </div>
    )
}

export default Body;