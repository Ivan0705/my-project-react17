import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "../const/localstorage";

const baseUrl = __IS_DEV__ ? 'http://localhost:3000' : 'https://production.ru';

export const $api = axios.create(
    {
        baseURL: baseUrl,
        headers: {
            authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
        },
    }
);
