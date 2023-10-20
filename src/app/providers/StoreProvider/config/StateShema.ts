import {CounterSchema} from "../../../../entites";
import {UserSchema} from "../../../../entites/User";
import {LoginSchema} from "../../../../features/AuthByUsername";
import {AnyAction, CombinedState, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {EnhancedStore} from "@reduxjs/toolkit/dist/configureStore";
//import {ReducersList} from "../../../../shared/config/components/DynamicModuleLoader/DynamicModuleLoader";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm: LoginSchema,
}

export type StateSchemaK = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaK, reducer: Reducer) => void;
    remove: (key: StateSchemaK) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
