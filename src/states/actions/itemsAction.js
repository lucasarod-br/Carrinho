import api from '../../services/api'
import { setItems } from '../slices/cartSlice'

const url = 'items'


export const fetchItems = () => async dispatch => {
    try {
        const response = await api.get(url)
        const items = response.data
        dispatch(setItems(items))
    } catch (error) {
        console.log("Deu erro", error) 
    }

}