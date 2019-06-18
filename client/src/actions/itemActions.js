import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types'
import axios from 'axios'


export const getItems = () => dispatch => {
dispatch(setItemsLoading())
axios.get('/api/items').then(res => dispatch({
    type: GET_ITEMS,
    payload: res.data
}))
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = (newItem) => {
    return {
        type: ADD_ITEMS,
        payload: newItem
    }
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}