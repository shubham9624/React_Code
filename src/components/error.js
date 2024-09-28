import { useRouteError } from "react-router-dom";
import { ErrorImage } from "../utils/constants";
const Error = ()=>{
    const error = useRouteError();
    return (
        <div className="error">
            <h1>OOPS !!! 😲</h1>
            <h2>Something Went Wrong !!</h2>
            <h3>{error.status} : {error.statusText}</h3>
            <img id='error-image' src={ErrorImage}></img>
        </div>
    );
};
export default Error;