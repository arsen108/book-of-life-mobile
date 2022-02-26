import axios from "axios";
import { API_URLS } from "./api-url";

export const makeRequest = axios.create({
    baseURL: API_URLS.BASE_URL,
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json'
})