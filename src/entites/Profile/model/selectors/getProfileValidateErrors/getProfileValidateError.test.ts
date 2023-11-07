import {DeepPartial} from "redux";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileValidateErrors} from "../../..";
import {ValidateProfileError} from "../../types/profile";

describe('getProfileValidateError.test.ts', () => {
    test('Should return error', () => {

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE
                ]
            }
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> | any = {};

        expect(getProfileValidateErrors(state)).toEqual(undefined);
    })
});
