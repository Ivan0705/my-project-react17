import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getProfileForm, Profile} from "../../..";
import {validateProfileData} from "../validate/validateProfileData";
import {ValidateProfileError} from "../../types/profile";

export const updateProfileData = createAsyncThunk<Profile,
    void,
    ThunkConfig<ValidateProfileError[]>>
(
    'profile/updateProfileData',

    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        // @ts-ignore
        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            // @ts-ignore
            const response = await extra.api.put<Profile>('/profile', formData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
