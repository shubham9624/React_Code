import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestrauntsMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const {restraId} = useParams();    
    const fetchMenu = async ()=>{
        const response = await fetch(MENU_API+restraId);
        const json = await response.json();

        setResInfo(json.data);
        //console.log('Fetch data',json.data);
    }
        if(resInfo === null) 
        {
            return <Shimmer />;  
        }

    const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    //console.log(itemCards);
    const {name,cuisines, costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>
            <ul className="menu-container">
                {itemCards.map((items) => (
                    <li key={items.card.info.id}> {items.card.info.name} - ₹{(items.card.info.price)/100}</li>
                ))}
            </ul>
        </div>
    );

};
export default RestrauntsMenu;