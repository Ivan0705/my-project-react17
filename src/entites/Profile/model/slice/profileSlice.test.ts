import {Country} from "../../../Country";
import {Currency} from "../../../Currency";
import {DeepPartial} from "redux";
import {profileActions, profileReducer, ProfileSchema, updateProfileData} from "../..";
import {ValidateProfileError} from "../types/profile";

const data = {
    username: 'admin',
    age: 31,
    country: Country.RUSSIA,
    first: 'John',
    city: 'Novosibirsk',
    currency: Currency.RUB,
};

describe('npm run unit profileSlice.test.ts', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({readonly: true});

    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {username: ''}};

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data
            }
        );
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {form: {username: 'admin'}};

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'cat'
            })
        )).toEqual({
                form: {
                    username: 'cat'
                }
            }
        );
    });

    test('test update service pending profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
                isLoading: true,
                validateErrors: undefined
            }
        );
    });

    test('test update service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                validateError: undefined,
                form: data,
                data
            }
        );
    });
});
