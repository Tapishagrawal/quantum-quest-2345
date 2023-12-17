import axios from "axios"
import { GET_USER_SUCCESS, USER_FAILURE, USER_REQUEST } from "../actionType";

const URL=import.meta.env.VITE_API_URL;


export const getUser = (paramObj) =>(dispatch) => { 
    dispatch({ type: USER_REQUEST});

axios
.get(`${URL}/users/get`,paramObj)
.then((res) => {
dispatch({ type: GET_USER_SUCCESS, payload: res.data });
 })
.catch((err) => {
    console.log(err);
dispatch({ type: USER_FAILURE }); 
});


};