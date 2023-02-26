import { createSlice } from "@reduxjs/toolkit"



export const CardSlice = createSlice({
    name: 'card',
    initialState: {
        name: '',
        number: '',
        expire: '',
        cvv: '',
    },
    reducers: {
        setValues( state , { payload }){
            state.name = payload.name;
            state.number = payload.number;
            state.expire = payload.expire;
            state.cvv = payload.cvv;
        },
        

    }
}
)
export const { setValues } = CardSlice.actions

export default CardSlice.reducer