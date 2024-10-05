import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: { //intial state
        items:[]
    },
    reducers:{
        addItem :(state, action)=>{ //reducer function
            /* mutating state or modifying
              Redux Tool kit
              WE HAVE TO MUTATE THE STATE */
            state.items.push(action.payload);
        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            /* This will not work b/c  immer 
                state.items=[] its changing state and adding a refrence  not modify  and change localy*/
                //console.log(current(state));
            state.items.length = 0; //here mutate by using this
        }
    }
});

/* the createSlice return object look like this
{
    actions:{
        addItems
    },
    reducer
} */
export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;