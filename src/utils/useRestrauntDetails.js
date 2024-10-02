import { useEffect, useState } from "react";
import { FOOD_DELIVERY_API } from "./constants";
const useRestrauntDetails = ()=>{

     const [restraDetails, setRestraDetails] = useState(null);

     useEffect(()=>{
        fetchData();
     },[]);

     const fetchData = async ()=>{

        const data = await fetch(FOOD_DELIVERY_API);
        const json = await data.json();
        setRestraDetails(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };

    return restraDetails;

}
export default useRestrauntDetails;