import api from '../../services/api'
import { setPrices } from '../slices/cartSlice'

const url = '0dbea73c-4768-4e6b-9c66-b82aaa592915'


export const fetchPrices = () => async dispatch => {
    try {
        const response = await api.get(url)
        const values = response.data.values
        dispatch(setPrices(values))
    } catch (error) {
        console.log("Deu erro", error) 
    }

}