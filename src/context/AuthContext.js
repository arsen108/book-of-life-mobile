import createDataContext from "./createDataContext";
import { API_URLS } from "../api/api-url";
import { makeRequest } from "../api/axios-setup";
import axios from "axios";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return {...state, errorMessage: action.payload};
        case "login":
            return {errorMessage: "", token: action.payload};
        case "clear_error_message":
            return {...state, errorMessage: ""};
        case "logout":
            return {token: null, errorMessage: ""};
        default:
            return state;
    }
};

const register =
    (dispatch) =>
        ({email, password}) => {
            makeRequest.post(API_URLS.REGISTER, {email, password}).catch(err => console.log('err', err))
        }

const registerWithEmail =
    (dispatch) =>
        async (data) => {
            const {email, firstName, lastName, fatherName} = data
            await makeRequest.post(API_URLS.REGISTER_WITH_EMAIL, {
                email,
                name: {first: firstName, last: lastName, father: fatherName}
            }).catch(err => console.log('err', err))
        }

const login =
    (dispatch) =>
        ({email, password}) => {
            makeRequest.post(API_URLS.LOGIN, {email, password}).catch(err => console.log('err', err))
        }


const logout = (dispatch) => async () => {
};

const clearErrorMessage = (dispatch) => () => {
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {register, registerWithEmail, login, logout, clearErrorMessage},
    {token: null, errorMessage: ""}
);
