import {DeepPartial} from "redux";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileIsLoading} from "../../..";

describe('getProfileIsLoading.test.ts', () => {
    test('Should return error', () => {

        const state: DeepPartial<StateSchema> = {
            profile: {isLoading: true}
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> | any = {};

        expect(getProfileIsLoading(state)).toEqual(undefined);
    })
});
