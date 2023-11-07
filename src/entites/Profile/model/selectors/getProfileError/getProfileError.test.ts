import {DeepPartial} from "redux";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileError} from "../../..";

describe('getProfileError.test.ts', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> | any = {
            profile: {
                error: 'error'
            }
        };

        expect(getProfileError(state)).toEqual('error');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> | any = {};

        expect(getProfileError(state)).toEqual(undefined);
    })
});
