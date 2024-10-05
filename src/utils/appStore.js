 import {configureStore} from '@reduxjs/toolkit'; 
 import cartReducer from './cartSlice';
 const appStore = configureStore(
    {
        reducer:{//to modify appstore
            cart: cartReducer //add cartReducer here
        }
    }
 );

 export default appStore;