import {CounterSchema} from "../../../../entites";
import {UserSchema} from "../../../../entites/User";
import {LoginSchema} from "../../../../features/AuthByUsername";
import {Action, CombinedState, Dispatch, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {EnhancedStore} from "@reduxjs/toolkit/dist/configureStore";
import {ProfileSchema} from "../../../../entites/Profile";
import {AxiosInstance} from "axios";
import {To} from 'history'
import {NavigateOptions} from "react-router-dom";

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm: LoginSchema,
    profile: ProfileSchema


}

export type StateSchemaK = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action<any>) => CombinedState<StateSchema>;
    add: (key: StateSchemaK, reducer: Reducer) => void;
    remove: (key: StateSchemaK) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue?: T;
    extra?: ThunkExtraArg;
    dispatch?: Dispatch;
}
