import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 rounded-lg bg-gray-700 text-white" onClick={handleClearCart}>Clear cart</button>
            {cartItems.length === 0 && <h1>Your card is Empty Shop Now 😀😀</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    );
};
export default Cart;