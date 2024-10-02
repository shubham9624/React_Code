import { useEffect, useState } from "react";
import { FOOD_DELIVERY_API } from "./constants";

const useRestrauntFilter =()=>{

    const [restrauntFilter, setrestrauntFilter] = useState("");

     useEffect(()=>{
        fetchData();
     },[]);

     const fetchData = async ()=>{

        const data = await fetch(FOOD_DELIVERY_API);
        const json = await data.json();
        restrauntFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };

    return restrauntFilter;
    
};
export default useRestrauntFilter;