import axios from "axios";
import { LOGIN_POST_FAILURE, LOGIN_POST_REQUEST, LOGIN_POST_SUCCESS, REGISTER_POST_SUCCESS } from "../actionType"

const URL = import.meta.env.VITE_API_URL

export const postUserRegistration = (newUserdata) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_POST_REQUEST })
        let res = await axios.post(`${URL}/users/register`, newUserdata);
        dispatch({ type: REGISTER_POST_SUCCESS, payload: { msg: res.status } });
        return res.status
    } catch (error) {
        dispatch({ type: LOGIN_POST_FAILURE })
        console.log(error)
    }
}