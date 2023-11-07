import {DeepPartial} from "redux";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileForm} from "../../..";
import {Country} from "../../../../Country";
import {Currency} from "../../../../Currency";

describe('getProfileForm.test.ts', () => {
    test('Should return error', () => {
        const data = {
            username: "admin",
            age: 31,
            country: Country.USA,
            lastname: "Cherry",
            first: "John",
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> | any = {};

        expect(getProfileForm(state)).toEqual(undefined);
    })
});
