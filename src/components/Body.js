import Restrauntcards , { withPromotedLabel }from "./RestrauntsCards";
import { FOOD_DELIVERY_API, NoInternet_IMAGE_URL, CDN_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestrauntDetails from "../utils/useRestrauntDetails";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Body =()=>{
    // const arr = useState(restraList);
    // const tempRestra = arr[0];
    // const setListtempRestra = arr[1];// These are same
    const tempRestra = useRestrauntDetails();
    const [filterRestra, setfilterRestra] = useState([]);
    const [searchText, setSearchText] =useState("");
    const {loggedInUser, setUserInfo} = useContext(UserContext);
    //Higher Order Components
    const RestrauntWithPromoted =withPromotedLabel(Restrauntcards);
    let promoted=false;
    //console.log("body");
    useEffect(()=>{
        fetchData();
     },[]);

     const fetchData = async ()=>{

        const data = await fetch(FOOD_DELIVERY_API);
        const json = await data.json();
        setfilterRestra(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };

       const onlineStatus = useOnlineStatus();
       if(!onlineStatus)
       {
          return (
            <h1>You ae offline Swithch On the internet</h1>
          )
       }
        if(tempRestra === null){
            return <Shimmer/>
        }

    return (
        <div className="Body">
            <div className="seacrh m-4 p-4">
            <input type="text" className="px-4 py-2 border border-solid border-black rounded-lg" placeholder="Search restaurants... " value ={searchText} onChange={(text)=>{
                setSearchText(text.target.value);

            }}/>
            <button type="button" className=" px-4 py-2 bg-green-300 m-4 mt-4 rounded-lg" onClick={()=>{

                const filtered = tempRestra.filter((restra) => 
                    restra.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                    setfilterRestra(filtered);
            }}>Search</button>

            <button className="px-4 py-2 m-2 bg-gray-300 rounded-lg" type="button" onClick={()=>{
                
                const filtered=tempRestra.filter((restra) => restra.info.avgRating >= 4);
                setfilterRestra(filtered);
                //console.log(tempRestra);
            }}>Filter</button>
            <label className="px-4">Username</label>
            <input className="border border-black p-2" value= {loggedInUser} onChange={(e)=>{
                setUserInfo(e.target.value);
            }}>
            </input>
            </div>
            <div className='flex flex-wrap'>
               {
                 filterRestra.map((restraunt)=>(
                     <Link to={'restraunts/'+restraunt.info.id} key={restraunt.info.id} >
                     {
                       promoted? <RestrauntWithPromoted restra={{
                            resName : restraunt.info.name,
                            cusine : restraunt.info.cuisines,
                            rating : restraunt.info.avgRating,
                            deliveryTime : `${restraunt.info.sla.deliveryTime} minutes`,
                            costFortwo : restraunt.info.costForTwo,
                            image : `${CDN_URL}${restraunt.info.cloudinaryImageId}`
    
                         }}/> : <Restrauntcards 
                        restra={{
                           resName : restraunt.info.name,
                           cusine : restraunt.info.cuisines,
                           rating : restraunt.info.avgRating,
                           deliveryTime : `${restraunt.info.sla.deliveryTime} minutes`,
                           costFortwo : restraunt.info.costForTwo,
                           image : `${CDN_URL}${restraunt.info.cloudinaryImageId}`
   
                        }}
                        />
                     }
                     </Link>
                 ))
 
               }
                
            </div>

        </div>
    )
}

export default Body;