import {createSlice} from "@reduxjs/toolkit";
import {userSlice} from "../../../User/model/slice/userSlice";
import {ProfileSchema} from "../..";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export const {actions: profileActions} = userSlice;
export const {reducer: profileReducer} = userSlice;
