import { createSlice } from "@reduxjs/toolkit"


export const slice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        prices: {}
    },
    reducers: {
        setItems( state , { payload }){
            state.items = payload;
        },
        setPrices( state, {payload}){
            state.prices = payload
        }
    }
}
)
export const { setItems, setPrices } = slice.actions

export default slice.reducer