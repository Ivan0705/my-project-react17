import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateShema";
import {counterReducer} from "../../../../entites";
import {userReducer} from "entites/User";
import {createReducerManager} from "./reducerManager";
import {loginReducer} from "features/AuthByUsername";
import {profileReducer} from "entites/Profile";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer
    };
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
