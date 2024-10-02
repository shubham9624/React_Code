
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMAGE_URL } from "../utils/constants";
import useRestraMenu from "../utils/useRestraMenu";

const RestrauntsMenu = ()=>{


    const {restraId} = useParams();    
    
    //Custom hooks
    const resInfo = useRestraMenu(restraId);
    
        if(resInfo === null) 
        {
            return <Shimmer />;  
        }

        const {itemCards,title} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        const { name, cuisines, costForTwoMessage,  avgRatingString, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;
        
        return (
                <div className="menu">
                   <div className="px-4 m-8 w-[40%] h-[240px] shadow-2xl rounded-2xl">
                        <h1 className="px-4 m-4 font-bold text-xl">{name}</h1>
                        <h3 className="px-4 font-bold">⭐{avgRatingString}({totalRatingsString}) -  {costForTwoMessage}</h3>
                        <h3 className="px-4 text-sm font-bold text-orange-600 underline">{cuisines.join(',')}</h3>
                        <h2 className="px-4">{title}({itemCards.length})</h2>
                   </div>
                    <div className=" p-4 m-4">
                        <ul className="p-4 m-4">
                            {itemCards.map((items) => (
                                <li key={items.card.info.id}>
                                <div className="">
                                    <h4 className="mt-4 font-bold text-gray-600 text-xl">{items.card.info.name}</h4>
                                    <div className="font-bold">
                                    ₹{(items.card.info.price) / 100}
                                    </div>
                                        <div className="font-bold text-sm text-green-700">
                                        ⭐{items.card.info.ratings.aggregatedRating.rating}({items.card.info.ratings.aggregatedRating.ratingCountV2})
                                        </div>  
                                    <div className="text-gray-500 font-bold">
                                        {items.card.info.description}
                                    </div> 
                                    <img className="w-40 rounded-xl ml-[40%]"
                                    src={MENU_IMAGE_URL + items.card.info.imageId} 
                                    alt={items.card.info.name} 
                                /> 
                                </div>
                                <p class="text-transparent border-b-2 border-gray-400 w-[50%]">Invisible Text</p>
                            </li>
                            ))}
                        </ul>
                    </div>
        
                </div>
        );

};
export default RestrauntsMenu;