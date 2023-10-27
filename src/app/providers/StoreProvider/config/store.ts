import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "./StateShema";
import {counterReducer} from "../../../../entites";
import {userReducer} from "entites/User";
import {createReducerManager} from "./reducerManager";
import {loginReducer} from "features/AuthByUsername";
import {profileReducer} from "entites/Profile";
import {$api} from "../../../../shared/api/api";
import {To} from "history";
import {NavigateOptions} from "react-router-dom";

export function createReduxStore(initialState?: StateSchema,
                                 navigate?: (to: To, options?: NavigateOptions) => void) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer as any,
    };
    const reducerManager = createReducerManager(rootReducers);


    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    };

    const store: any = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,

        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
    });

    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
