import {Country} from "../../../../Country";
import {Currency} from "../../../../Currency";
import {validateProfileData} from "./validateProfileData";
import {ValidateProfileError} from "../../types/profile";

const data = {
    username: 'admin',
    age: 31,
    country: Country.RUSSIA,
    lastname: 'Cherry',
    first: 'John',
    city: 'Novosibirsk',
    currency: Currency.RUB,
};

describe('npm run unit validateProfileData.test.ts', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([])
    });

    test('without first and last name', async () => {
        const result = validateProfileData({...data, first: '', lastname: ''});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA,])
    });

    test('incorrect age', async () => {
        const result = validateProfileData({...data, age: undefined});

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    });

    test('incorrect country', async () => {
        const result = validateProfileData({...data, country: undefined});

        expect(result).toBe(result)
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            "INCORRECT_USER_DATA",
            "INCORRECT_AGE",
            "INCORRECT_COUNTRY"])
    });
});
