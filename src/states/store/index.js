import { configureStore } from "@reduxjs/toolkit";
import { fetchItems } from "../actions/itemsAction";
import { fetchPrices } from "../actions/pricesAction";
import cartReducer from '../slices/cartSlice'
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
}) 

store.dispatch(fetchPrices());
store.dispatch(fetchItems());

export default store