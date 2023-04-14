import { Action } from "redux";
import { addDataActions, getDataActions, getDataByIdActions } from "../types/dataType";

const initialState = {
    data: [],
    getDataLoading: 'idle',
    getDataError: null,

    addedData: null,
    addDataLoading: 'idle',
    addDataError: null,

    dataById: {},
    getDataByIdLoading: 'idle',
    getDataByIdError: null,
};

export const dataReducer = (state = initialState, action: any) => {

    switch (action.type) {
        /*get data*/
        case getDataActions.SET_GET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case getDataActions.SET_GET_DATA_LOADING:
            return {
                ...state,
                getDataLoading: action.payload,
            };
        case getDataActions.SET_GET_DATA_ERROR:
            return {
                ...state,
                getDataError: action.payload,
            };

        /*add data*/
        case addDataActions.SET_ADD_DATA:
            return {
                ...state,
                addedData: action.payload,
            };
        case addDataActions.SET_ADD_DATA_LOADING:
            return {
                ...state,
                addDataLoading: action.payload,
            };
        case addDataActions.SET_ADD_DATA_ERROR:
            return {
                ...state,
                addDataError: action.payload,
            };

        /*get data by id*/
        case getDataByIdActions.SET_GET_DATA_BY_ID:
            return {
                ...state,
                dataById: action.payload,
            };
        case getDataByIdActions.SET_GET_DATA_BY_ID_LOADING:
            return {
                ...state,
                getDataByIdLoading: action.payload,
            };
        case getDataByIdActions.SET_GET_DATA_BY_ID_ERROR:
            return {
                ...state,
                getDataByIdError: action.payload,
            };

        default:
            return state;
    }
}
