import {DeepPartial} from "redux";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileReadonly} from "../../..";

describe('getProfileReadonly.test.ts', () => {
    test('Should return error', () => {

        const state: DeepPartial<StateSchema> = {
            profile: {readonly: true}
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> | any = {};

        expect(getProfileReadonly(state)).toEqual(undefined);
    })
});
