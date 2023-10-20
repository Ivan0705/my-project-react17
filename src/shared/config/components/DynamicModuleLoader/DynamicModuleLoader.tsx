import React, {FC, useEffect} from "react";
import {ReduxStoreWithManager, StateSchemaK} from "../../../../app/providers/StoreProvider/config/StateShema";
import {Reducer} from "@reduxjs/toolkit";
import {useDispatch, useStore} from "react-redux";

export type ReducersList = {
    [name in StateSchemaK]?: Reducer;
}

type ReducerListEntry = [StateSchemaK, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const dispatch = useDispatch();

    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });


        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove('loginForm');
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }

        }
    }, []);

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
};
