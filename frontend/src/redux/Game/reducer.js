
import { GAME_DELETE, GAME_FAILURE, GAME_REQUEST, GET_GAME_SUCCESS, 
    PATCH_GAME_SUCCESS, POST_GAME_SUCCESS } from "../actionType";


const initialState = {
    isLoading: false,
    isError: false,
    games: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GAME_REQUEST:

            return { ...state, isLoading: true };

        case GAME_FAILURE:

            return { ...state, isLoading: false, isError: true };

        case POST_GAME_SUCCESS:

            return { ...state, isLoading: false };

        case GET_GAME_SUCCESS:
            return { ...state, isLoading: false, games: payload };
        case PATCH_GAME_SUCCESS:
            return { ...state, isLoading: false };
            case GAME_DELETE:
                return {...state, games: state.games.filter((game)=>game.id !== payload)}
        default:

            return state;
    }
}
