import { authTypes } from "../types/authType";

const initialState = {
    token: null,
    signinLoading: 'idle',
    signinError: null,

    signupData: null,
    signupLoading: 'idle',
    signupError: null
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

        /*signup*/
        case authTypes.SET_SIGNUP:
            return {
                ...state,
                signupData: action.payload,
            };
        case authTypes.SET_SIGNUP_LOADING:
            return {
                ...state,
                signupLoading: action.payload,
            };
        case authTypes.SET_SIGNUP_ERROR:
            return {
                ...state,
                signupError: action.payload,
            };

        default:
            return state;
    }
}
