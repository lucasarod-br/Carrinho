import { configureStore } from "@reduxjs/toolkit";
import { fetchItems } from "../actions/itemsAction";
import cartReducer from '../slices/cartSlice'
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
}) 

store.dispatch(fetchItems());
 

export default store