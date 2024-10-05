
import { useState } from "react";
import ItemList from "./itemList";
const RestrauntCategories = (props)=>{
    const {title, itemCards} = props?.data;
    const {showItems,setShowIndex} = props;
    const [showSingle,setSingle] = useState(false);
    const handleClick = () => {
        setShowIndex();
        setSingle(!showSingle);
    };
    return (
        <div>
            {/* Header */}
            <div className="  w-[90%] bg-gray-100 shadow-lg p-4 mx-auto my-6">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                <span>👇</span>
                </div>
                {/* Accordian Body */}
                {showSingle && showItems && <ItemList items={itemCards} />}
            </div>
            
            
        </div>
    );
};

export default RestrauntCategories;