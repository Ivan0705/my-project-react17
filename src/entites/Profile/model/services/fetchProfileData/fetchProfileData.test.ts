import {Country} from "../../../../Country";
import {Currency} from "../../../../Currency";
import {TestAsyncThunk} from "../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchProfileData} from "./fetchProfileData";


const data = {
    username: 'admin',
    age: 31,
    country: Country.RUSSIA,
    first: 'John',
    city: 'Novosibirsk',
    currency: Currency.RUB,
};

describe('fetchProfileData.test.ts', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data}));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        const error = {status: 403};
        thunk.api.get.mockReturnValue(Promise.resolve(error));
        const result = await thunk.callThunk();

        console.log("Status: ", result.meta.requestStatus);
        expect(result.meta.requestStatus).toBe('rejected');
    })
});
