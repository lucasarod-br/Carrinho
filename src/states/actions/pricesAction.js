import api from '../../services/api'
import { setPrices } from '../slices/cartSlice'

const url = 'values'


export const fetchPrices = () => async dispatch => {
    try {
        const response = await api.get(url)
        const values = response.data
        dispatch(setPrices(values))
    } catch (error) {
        console.log("Deu erro", error) 
    }

}