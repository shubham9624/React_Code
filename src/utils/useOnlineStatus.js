import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    //check Online
    const [onlineStatus,setOnlineStatus] = useState(true);
    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);
    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;