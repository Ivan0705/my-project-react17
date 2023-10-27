import * as React from "react";
import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore, StateSchema} from "..";
import {DeepPartial} from "redux";
import {useNavigate} from "react-router-dom";


interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateSchema>,

}

export const StoreProvider = (props: StoreProviderProps) => {
    const navigate = useNavigate();

    const {
        children,
        initialState,
    } = props;


    const store = createReduxStore(
        initialState as StateSchema,
        navigate
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

