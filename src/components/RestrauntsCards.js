const Restrauntcards = (props) =>{
    const { resName, cusine, rating, deliveryTime , costFortwo, image} = props?.restra; 
     return (
         <div className=' flex-wrap m-4 p-4 w-[290px] shadow-lg bg-gray-200 rounded-2xl transition-transform transform hover:scale-[1.1] hover:bg-green-400'>
             <img className="rounded-lg" alt='food logo' src={image} ></img>
             <h3 className="font-bold py-4">{resName}</h3>
             <h4>{cusine.join(',')}</h4>
             <h4 className="text-green-900 font-bold">⭐{rating}</h4>
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