import {createSlice} from "@reduxjs/toolkit";
import {fetchProfileData, Profile, ProfileSchema, updateProfileData} from "../..";
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
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === 'string' || typeof action.payload === 'undefined') {
                state.error = action.payload
            }
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === 'string' || typeof action.payload === 'undefined') {
                state.error = action.payload
            }
        })
    }
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
