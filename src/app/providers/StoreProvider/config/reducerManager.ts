import {AnyAction, combineReducers, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

import {ReducerManager, StateSchema, StateSchemaK} from "./StateShema";

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {

    const reducers = {...initialReducers};


    let combinedReducer = combineReducers(reducers);


    let keysToRemove: Array<StateSchemaK> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = {...state};
                keysToRemove.forEach((key) => {
                    delete state[key]
                });

                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaK, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaK) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers)
        }
    }
}
