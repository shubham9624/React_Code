import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestraMenu =(resId)=>{

    const [restraInfo, setrestInfo] =useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setrestInfo(json.data);
    }
    return restraInfo;

};
export default useRestraMenu;