import React, {Suspense, useEffect} from "react";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {Siderbar} from "../widgets/Siderbar";
import {useDispatch} from "react-redux";

import {userActions} from "entites/User";


export const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className={'content-page'}>
                    <Siderbar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
};
