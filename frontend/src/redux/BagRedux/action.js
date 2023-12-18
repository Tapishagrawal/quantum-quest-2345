import axios from "axios";
import { BAG_REQUEST, BAG_POST_SUCCESS, BAG_FAILURE, BAG_GET_SUCCESS, BAG_DELETE_SUCCESS } from "../actionType"

const URL = import.meta.env.VITE_API_URL;

export const addInBagPost = (bagData, token) => async (dispatch) => {
    try {
        dispatch({ type: BAG_REQUEST })
        let res = await axios.post(`${URL}/baglist/add`, bagData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: BAG_POST_SUCCESS});
        dispatch(getBagData(token))
    } catch (error) {
        dispatch({ type: BAG_FAILURE })
        console.log(error);
    }
}

export const getBagData = (token) => async (dispatch) => {
    try {
        dispatch({ type: BAG_REQUEST })
        let res = await axios.get(`${URL}/baglist`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: BAG_GET_SUCCESS, payload:res.data })
    } catch (error) {
        dispatch({ type: BAG_FAILURE })

    }
}

export const removeFromBag = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: BAG_REQUEST })
        let res = await axios.delete(`${URL}/baglist/remove/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: BAG_DELETE_SUCCESS,payload:id});
        dispatch(getBagData(token))
    } catch (error) {
        dispatch({ type: BAG_FAILURE })
        console.log(error);
    }
}