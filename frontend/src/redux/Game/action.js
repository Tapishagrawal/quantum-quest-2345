import axios from "axios"
import { GAME_FAILURE, GAME_REQUEST, GET_GAME_SUCCESS, PATCH_GAME_SUCCESS, POST_GAME_SUCCESS } from "../actionType";

const baseUrl="";
export const addGame= (newGame) => (dispatch) => {

    dispatch({ type: GAME_REQUEST });
    
    axios
    
    .post(baseUrl, newGame)
    
    .then((res) => {
    
    dispatch({ type: POST_GAME_SUCCESS });
    })
    .catch((err) => {
    
    dispatch({ type: GAME_FAILURE }); });
    
    };
    
    export const getGame = (paramObj) => (dispatch) => { 
        dispatch({ type: GAME_REQUEST});
    
    axios
    .get(baseUrl,paramObj)
    .then((res) => {
    dispatch({ type: GET_GAME_SUCCESS, payload: res.data });
     })
    .catch((err) => {
    dispatch({ type: GAME_FAILURE }); 
    });
    
    
    };

    export const editGame =(id,data)=>(dispatch)=>{
        dispatch({type:GAME_REQUEST});
        axios.patch(`${baseUrl}/update/${id}`,data)
        .then((res)=>{
        dispatch({type:PATCH_GAME_SUCCESS})
        })
        .catch((err)=>{
            dispatch({type:GAME_FAILURE})
        })
        }