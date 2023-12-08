import React, {Suspense, useEffect} from "react";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {Siderbar} from "../widgets/Siderbar";
import {useDispatch, useSelector} from "react-redux";

import {getUserInited, userActions} from "entites/User";


export const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className={'content-page'}>
                    <Siderbar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
};
