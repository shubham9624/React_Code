import User from './user.js'; 
import Userclass from './userClass';
const About = ()=>{
    return (
        <div className="p-4 m-4 shadow-2xl w-[40%]">
            <h1 className='font-bold text-3xl'>About Us :-</h1>
            <h2 className='font-bold text-2xl text-gray-600'>This Annapurna Food delivery Application Developed By</h2>
            <User />
            {/* <Userclass/> */}
        </div>
    )
}
export default About;