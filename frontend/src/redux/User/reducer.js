import { GET_USER_SUCCESS, USER_FAILURE, USER_REQUEST } from "../actionType";


const initialState = {
    isLoading: false,
    isError: false,
    users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case USER_REQUEST:

            return { ...state, isLoading: true };

        case USER_FAILURE:

            return { ...state, isLoading: false, isError: true };


        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, users: payload };

        default:

            return state;
    }
}