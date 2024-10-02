
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestraMenu from "../utils/useRestraMenu";
import RestrauntCategories from "./restrauntCategories";

const RestrauntsMenu = ()=>{


    const {restraId} = useParams();    
    const [showIndex, setShowIndex] =useState(null);

    //Custom hooks
    const resInfo = useRestraMenu(restraId);
    
        if(resInfo === null) 
        {
            return <Shimmer />;  
        }

        const {itemCards,title} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        const { name, cuisines, costForTwoMessage,  avgRatingString, totalRatingsString ,areaName, sla } = resInfo?.cards[2]?.card?.card?.info;
        const {cards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
        const categories = cards.filter((c)=>{
            return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        });
        return (
            <>
                   <div className="text-center px-4 ml-[30%] mt-4 w-[40%] h-[240px] shadow-2xl rounded-2xl">
                        <h1 className="px-1 m-4 font-bold text-xl">{name}</h1>
                        <h3 className="px-4 font-bold text-green-800">⭐{avgRatingString}({totalRatingsString}) -  {costForTwoMessage}</h3>
                        <h3 className="px-4 text-sm font-bold text-orange-600 underline">{cuisines.join(',')}</h3>
                        <h3 className="m-4 font-bold text-gray-500">Outlet {areaName}</h3>
                        <h3 className="m-4 font-bold">{sla.slaString}</h3>
                        <h2 className="px-4 font-bold">{title}({itemCards===null?[]:itemCards.length})</h2>
                        
                   </div>
                   <div>
                        {
                            categories.map((category, index) => (
                                //controlled components 
                                <RestrauntCategories 
                                key ={category?.card?.card?.title} data={category?.card?.card}
                                showItems= {index === showIndex && true}
                                setShowIndex = {()=> setShowIndex(index)}
                                />
                            ))
                        }
                   </div>
            </>
                    
        
        );

};
export default RestrauntsMenu;