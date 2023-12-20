import { WISHLIST_POST_REQUEST, WISHLIST_POST_FAILURE, WISHLIST_POST_SUCCESS, WISHLIST_GET_SUCCESS, WISHLIST_DELETE_SUCCESS } from "../actionType"

const initialState = {
    isLoading: false,
    isError: false,
    wishListData: [],
    dataCount:0
}
export const reducer = (state = initialState, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case WISHLIST_POST_REQUEST: {
            return { ...state, isLoading: true }
        }
        case WISHLIST_POST_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        case WISHLIST_POST_SUCCESS: {
            return { ...state, isLoading: false, isError: false }
        }
        case WISHLIST_GET_SUCCESS: {
            return { ...state, isLoading: false, isError: false, wishListData:payload, dataCount:payload.length }
        }
        case WISHLIST_DELETE_SUCCESS:{
            const updatedData = state.wishListData.filter(game=>game._id !==payload)
            return { ...state, isLoading: false, isError: false, wishListData:updatedData, dataCount:updatedData.length }
        }
        default:
            return state
    }
}