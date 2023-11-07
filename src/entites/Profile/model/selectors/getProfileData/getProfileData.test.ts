import {Country} from "../../../../Country";
import {Currency} from "../../../../Currency";
import {DeepPartial} from "redux";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileData} from "./getProfileData";

describe('getProfileData.test.ts', () => {
    test('Should return error', () => {
        const data = {
            username: "admin",
            age: 31,
            country: Country.RUSSIA,
            lastname: "Cherry",
            first: "John",
            currency: Currency.RUB,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
});
