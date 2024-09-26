const Restrauntcards = (props) =>{
    const { resName, cusine, rating, deliveryTime ,image} = props?.restra;
     return (
         <div className='res-cards'>
             <img id="food-logo" alt='food logo' src={image} ></img>
             <h3>{resName}</h3>
             <h4>{cusine.join(',')}</h4>
             <h4>{rating}</h4>
             <h4>{deliveryTime}</h4>
         </div>
     )
 };

 export default Restrauntcards;