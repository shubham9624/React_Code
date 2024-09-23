/**
 * Header
 * - Logo
 * - Navbar Items
 * Body
 * - Search bar
 * - Search button
 * - card container(restraunt conrainer)
 * - Image
 * - cuisine
 * - Timer container
 * - Rating
 * Footer
 * - copyrights
 * - Links
 * - Contact
 * - Address
 */
import React from 'react';
import ReactDom from 'react-dom/client';

const restraList = [
    {
        id: 1,
        resName: "Annanpurna",  
        cusine: ["North Indian", "South Indian", "Ice-cream"],
        rating: 4.9,
        deliveryTime: "20 mins",
        image: "https://www.chefajaychopra.com/assets/img/recipe/1-1669036985Specialaamrasthali1webp.webp"
    },
    {
        id: 2,
        resName: "KFC",
        cusine: ["Asian", "Continental", "Indian"],
        rating: 4.7,
        deliveryTime: "30 mins",
        image: "https://cdn4.singleinterface.com/files/banner_images/34404/952_1624955497_wednesdaybucketmin.jpg"
    },
    {
        id: 3,
        resName: "Momos",
        cusine: ["Chinese", "Tibetan"],
        rating: 4.7,
        deliveryTime: "15 mins",
        image: "https://img.freepik.com/premium-photo/attractive-chicken-momos-plate_944019-4073.jpg"
    },
    {
        id: 4,
        resName: "Burger King",
        cusine: ["Fast Food", "Burgers"],
        rating: 4.5,
        deliveryTime: "25 mins",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/6506108/ca95a5e2f62783c97ce051fae26d7870_featured_v2.jpg"
    },
    {
        id: 5,
        resName: "Dominos",
        cusine: ["Pizza", "Italian"],
        rating: 4.6,
        deliveryTime: "30 mins",
        image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/5aed1bfa8e2cdd15e963242bafda2813_featured_v2.jpg"
    },
    {
        id: 6,
        resName: "Chinese Wok",
        cusine: ["Chinese", "Asian"],
        rating: 4.4,
        deliveryTime: "22 mins",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/e0839ff574213e6f35b3899ebf1fc597"
    },
    {
        id: 7,
        resName: "Eatfit",
        cusine: ["Healthy", "Salads", "North Indian"],
        rating: 4.8,
        deliveryTime: "18 mins",
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_400,c_fit/dpr_2/image/eatfit-in/TakeMeToEatFitMWeb.jpg"
    },
    {
        id: 8,
        resName: "Alice In Gelatoland",
        cusine: ["Ice Cream", "Desserts"],
        rating: 4.6,
        deliveryTime: "15 mins",
        image: "https://content3.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.210914100900.s4n4/catalogue/alice-in-gelatoland-andheri-east-mumbai-ice-cream-parlours-i3lu6pkk2y.jpg"
    },
    {
        id: 9,
        resName: "Kulfi House",
        cusine: ["Kulfi", "Desserts"],
        rating: 4.5,
        deliveryTime: "20 mins",
        image: "https://content.jdmagicbox.com/comp/pune/b9/020pxx20.xx20.220419040756.u2b9/catalogue/big-bowl-company-baner-pune-restaurants-1vdgd3vkr6.jpg"
    },
    {
        id: 10,
        resName: "Big Bowl",
        cusine: ["Chinese", "Fast Food"],
        rating: 4.7,
        deliveryTime: "22 mins",
        image: "https://b.zmtcdn.com/data/pictures/9/19425109/ff6ef052f3a52a07f8b015b73b423a61.jpg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        id: 11,
        resName: "Mac Donald",
        cusine: ["Burgers", "Fast Food"],
        rating: 4.5,
        deliveryTime: "25 mins",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNZw-Jhb1_NhWfELDXC-UCN-P6FV6IMWglA&s"
    },
    {
        id: 12,
        resName: "Mutton House",
        cusine: ["Mughlai", "Indian"],
        rating: 4.9,
        deliveryTime: "30 mins",
        image: "https://www.whiskaffair.com/wp-content/uploads/2019/02/Mutton-Rogan-Josh-2-3.jpg"
    }
];

const Header = ()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img id="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/25539c29532269.55f7d6a0a8c71.jpg"></img>
            </div>
            <div className='nav-Items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>  
    )
}

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
const Body =()=>{
    return (
        <div className="Body">
            <div className="seacrh">
            <input type="text" placeholder="Search restaurants..." />
            <button type="button">Search</button>
            </div>
            <div className='restraunt-container'>
               {
                 restraList.map((restraunt)=>(
                     <Restrauntcards key={restraList.id} restra={restraunt}/>
                 ))
 
               }
                
            </div>

        </div>
    )
}
const AppLayout = ()=>{
    return <div className="app">
            <Header/>
            <Body/>
    </div>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);