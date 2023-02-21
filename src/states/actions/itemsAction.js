import api from '../../services/api'
import { setItems } from '../slices/cartSlice'

const url = 'd6e9a93f-9741-4494-b81e-637a8e9b8ddd'


export const fetchItems = () => async dispatch => {
    try {
        const response = await api.get(url)
        const items = response.data.items
        dispatch(setItems(items))
    } catch (error) {
        console.log("Deu erro", error) 
    }

}