import { authTypes } from "../types/authType";

const initialState = {
    token: null,
    signinLoading: 'idle',
    signinError: null
};

export const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        /*signin*/
        case authTypes.SET_SIGNIN:
            return {
                ...state,
                token: action.payload,
            };
        case authTypes.SET_SIGNIN_LOADING:
            return {
                ...state,
                signinLoading: action.payload,
            };
        case authTypes.SET_SIGNIN_ERROR:
            return {
                ...state,
                signinError: action.payload,
            };

        default:
            return state;
    }
}
