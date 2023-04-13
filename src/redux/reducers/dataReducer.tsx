import { Action } from "redux";
import { getDataActions } from "../types/dataType";

const initialState = {
    data: [],
    dataLoading: 'idle',
    dataError: null
};

export const dataReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        case getDataActions.SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case getDataActions.SET_DATA_LOADING:
            return {
                ...state,
                dataLoading: action.payload,
            };
        case getDataActions.SET_DATA_ERROR:
            return {
                ...state,
                dataError: action.payload,
            };
        default:
            return state;
    }
}
