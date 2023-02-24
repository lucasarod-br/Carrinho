import { configureStore } from "@reduxjs/toolkit";
import { fetchItems } from "../actions/itemsAction";
import { fetchPrices } from "../actions/pricesAction";
import cartReducer from '../slices/cartSlice'
import cardReducer from '../slices/cardSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        card: cardReducer,
    },
}) 

store.dispatch(fetchPrices());
store.dispatch(fetchItems());

export default store