import {createSlice} from "@reduxjs/toolkit";
import {userSlice} from "../../../User/model/slice/userSlice";
import {fetchProfileData, Profile, ProfileSchema} from "../..";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === 'string' || typeof action.payload === 'undefined') {
                state.error = action.payload
            }
        })
    }
});

export const {actions: profileActions} = userSlice;
export const {reducer: profileReducer} = userSlice;
