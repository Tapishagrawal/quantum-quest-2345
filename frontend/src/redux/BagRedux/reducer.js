import {  BAG_REQUEST, BAG_FAILURE, BAG_POST_SUCCESS, BAG_GET_SUCCESS, BAG_DELETE_SUCCESS } from "../actionType"

const initialState = {
    isLoading: false,
    isError: false,
    bagData: [],
    bagdataCount:0
}
export const reducer = (state = initialState, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case BAG_REQUEST: {
            return { ...state, isLoading: true }
        }
        case BAG_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        case BAG_POST_SUCCESS: {
            return { ...state, isLoading: false, isError: false }
        }
        case BAG_GET_SUCCESS: {
            return { ...state, isLoading: false, isError: false, bagData:payload, bagdataCount:payload.length }
        }
        case BAG_DELETE_SUCCESS:{
            const updatedData = state.bagData.filter(game=>game._id !==payload)
            return { ...state, isLoading: false, isError: false, bagData:updatedData, bagdataCount:updatedData.length }
        }
        default:
            return state
    }
}