import React, {Suspense} from "react";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {Siderbar} from "../widgets/Siderbar";


export const App = () => {
    const {theme} = useTheme();
    /*
        useEffect(() => {
            throw new Error()
        }, []);
    */
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
