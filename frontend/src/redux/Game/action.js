import axios from "axios"
import { GAME_FAILURE, GAME_REQUEST, GET_GAME_SUCCESS, PATCH_GAME_SUCCESS, POST_GAME_SUCCESS } from "../actionType";

const URL=import.meta.env.VITE_API_URL;
export const addGame= (newGame) => (dispatch) => {

    dispatch({ type: GAME_REQUEST });
    
    axios
    
    .post(`${URL}/add`, newGame)
    
    .then((res) => {
    
    dispatch({ type: POST_GAME_SUCCESS });
    console.log(res);
    })
    .catch((err) => {
        console.log(err);
    dispatch({ type: GAME_FAILURE }); });
   
    };
    
    export const getGame = (paramObj) => (dispatch) => { 
        dispatch({ type: GAME_REQUEST});
    
    axios
    .get(`${URL}`,paramObj)
    .then((res) => {
    dispatch({ type: GET_GAME_SUCCESS, payload: res.data });
     })
    .catch((err) => {
        console.log(err);
    dispatch({ type: GAME_FAILURE }); 
    });
    
    
    };

    export const editGame =(id,data)=>(dispatch)=>{
        dispatch({type:GAME_REQUEST});
        axios.patch(`${URL}/update/${id}`,data)
        .then((res)=>{
            console.log(res);
        dispatch({type:PATCH_GAME_SUCCESS})
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type:GAME_FAILURE})
        })
        }