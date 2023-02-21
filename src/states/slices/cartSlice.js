import { createSlice } from "@reduxjs/toolkit"


export const slice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        setItems( state , { payload }){
            state.items = payload
        }
    }
}
)
export const { setItems } = slice.actions

export default slice.reducer