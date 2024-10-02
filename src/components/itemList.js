import { MENU_IMAGE_URL } from "../utils/constants";
const ItemList = (props)=>{
    const {items} =props;
    //console.log(props);
    return (
        <div>
            { 
                 items.map(item => (
                    <div key = {item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2">
                        <div>
                        <img className="w-40 rounded-xl ml-[80%]" src={MENU_IMAGE_URL+item.card.info.imageId}></img>
                        <button className=" w-[90px] p-2 bg-white shadow-lg rounded-xl  ml-[71%] absolute text-green-800 font-bold">Add +</button>
                        </div>
                        <div className="py-2 ">
                            <span className="font-bold text-gray-600">{item.card.info.name}</span>
                            <span className="font-bold px-6"> ₹{(item.card.info.price)/100}</span>
                        </div>
                        <div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default ItemList;