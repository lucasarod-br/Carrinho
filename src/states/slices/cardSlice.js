import { createSlice } from "@reduxjs/toolkit"


export const CardSlice = createSlice({
    name: 'card',
    initialState: {
        name: '',
        number: '',
        expireDate: '',
        cvv: ''
    },
    reducers: {
        setValues( state , { payload }){
            state.name = payload.name;
            state.number = payload.number;
            state.expireDate = payload.expireDate;
            state.cvv = payload.cvv;
        }
    }
}
)
export const { setValues } = CardSlice.actions

export default CardSlice.reducer