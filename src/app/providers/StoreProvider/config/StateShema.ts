import {CounterSchema} from "../../../../entites";
import {UserSchema} from "../../../../entites/User";
import {LoginSchema} from "../../../../features/AuthByUsername";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm: LoginSchema,
}
