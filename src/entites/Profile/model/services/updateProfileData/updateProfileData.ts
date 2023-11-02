import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getProfileForm, Profile} from "../../..";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',

    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        const formData = getProfileForm(getState());
        try {
            // @ts-ignore
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
