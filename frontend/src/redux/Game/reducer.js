
import { GAME_FAILURE, GAME_REQUEST, GET_GAME_SUCCESS, 
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
            // const updatedData = state.games.map(game =>{
            //     if (game._id === payload) {
            //         return { ...game, library: !game.library };
            //     } else {
            //         return game;
            //     }
            // })
            return { ...state, isLoading: false, isError:false };
        default:

            return state;
    }
}
