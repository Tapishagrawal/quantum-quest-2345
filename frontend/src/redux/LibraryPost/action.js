import axios from "axios";
import { WISHLIST_POST_REQUEST, WISHLIST_POST_SUCCESS, WISHLIST_POST_FAILURE, WISHLIST_GET_SUCCESS, WISHLIST_DELETE_SUCCESS } from "../actionType"

const URL = import.meta.env.VITE_API_URL;

export const addInWishListPost = (wishListData, token) => async (dispatch) => {
    try {
        dispatch({ type: WISHLIST_POST_REQUEST })
        let res = await axios.post(`${URL}/wishlist/add`, wishListData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: WISHLIST_POST_SUCCESS});
        dispatch(getWishListData(token))
    } catch (error) {
        dispatch({ type: WISHLIST_POST_FAILURE })
        console.log(error);
    }
}

export const getWishListData = (token) => async (dispatch) => {
    try {
        dispatch({ type: WISHLIST_POST_REQUEST })
        let res = await axios.get(`${URL}/wishlist`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: WISHLIST_GET_SUCCESS, payload:res.data })
    } catch (error) {
        dispatch({ type: WISHLIST_POST_FAILURE })

    }
}

export const removeFromWishList = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: WISHLIST_POST_REQUEST })
        let res = await axios.delete(`${URL}/wishlist/remove/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: WISHLIST_DELETE_SUCCESS,payload:id});
        dispatch(getWishListData(token))
    } catch (error) {
        dispatch({ type: WISHLIST_POST_FAILURE })
        console.log(error);
    }
}