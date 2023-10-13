import * as React from "react";
import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../index";
import {StateSchema} from "../config/StateShema";
import {DeepPartial} from "redux";


interface StoreProviderProps {
    children?: ReactNode,
    initialState: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props;

    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
