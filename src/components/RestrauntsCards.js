import { STAR_EMOJI } from "../utils/constants";
const Restrauntcards = (props) =>{
    let { resName, cusine, rating, deliveryTime , costFortwo, image} = props?.restra; 
    
    cusine=cusine.length<3?cusine.join(",") : cusine.splice(0,3).join(",")+'...';
     return (
         <div className=' m-2 p-2 w-[290px] min-h-[400px] rounded-2xl transition-transform transform hover:scale-[1.1]'>
             <img className="ml-3 rounded-lg h-[170px] w-[250px] object-cover shadow-xl shadow-gray-300" alt='food logo' src={image} ></img>
             <h3 className="font-bold py-2 truncate">{resName}</h3>
             <h4 className="truncate mb-3">{cusine}</h4>
             <span className="flex items-center">
             <img className="w-4 h-4" src={STAR_EMOJI} alt="Star" />
             <h4 className="ml-2 font-bold ">{rating}</h4>
            </span>
             <h4>{costFortwo}</h4>
             <h4 className=" font-bold">{deliveryTime}</h4>    
         </div>
     )
 };

 //Higher Order Componenets
 export const withPromotedLabel = (Restrauntcards)=>{

    return (props)=>{

        return (
            <div>
                <label className="bg-black bg-opacity-45 text-white m-2 p-2 rounded-lg shadow-lg">Prmoted</label>
                <Restrauntcards {...props}/>
            </div>
        )
    }
 }

 export default Restrauntcards;