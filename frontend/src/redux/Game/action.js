import axios from "axios"
import { GAME_DELETE, GAME_FAILURE, GAME_REQUEST, GET_GAME_SUCCESS, PATCH_GAME_SUCCESS, POST_GAME_SUCCESS } from "../actionType";


const URL = import.meta.env.VITE_API_URL;
export const addGame = (newGame) => (dispatch) => {

    dispatch({ type: GAME_REQUEST });

    axios
        .post(`${URL}/add`, newGame)

        .then((res) => {

            dispatch({ type: POST_GAME_SUCCESS });
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: GAME_FAILURE });
        });

};


export const getGame = (params) => (dispatch) => {
    dispatch({ type: GAME_REQUEST });

    axios
        .get(`${URL}/games`, params)
        .then((res) => {
            dispatch({ type: GET_GAME_SUCCESS, payload: res.data });
            return res.data
        })
        .catch((err) => {
            dispatch({ type: GAME_FAILURE });
        });

}


export const editGame = (id, data) => (dispatch) => {
    dispatch({ type: GAME_REQUEST });
    axios.patch(`${URL}/games/update/${id}`, data)
        .then((res) => {
            dispatch({ type: PATCH_GAME_SUCCESS })
            dispatch(getGame())
        })
        .catch((err) => {
            dispatch({ type: GAME_FAILURE })
        })
}

export const deleteGame = (id) => (dispatch) => {
    return axios.delete(`${URL}/games/delete/${id}`)
        .then((res) => {
            console.log(res);
            dispatch({ type: GAME_DELETE, payload: id })
        })
        .catch((err) => {
            console.log(err);

        })
}