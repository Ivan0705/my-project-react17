import * as React from "react";
import {memo, Suspense, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "../../../../shared/PageLoader/ui/PageLoader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entites/User";

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return !(route.authOnly && !isAuth);


        });
    }, [isAuth]);

    return (
        <Suspense fallback={<div><PageLoader/></div>}>
            <Routes>
                {routes.map(({element, path}) => (
                    <Route key={path} path={path} element={(
                        <Suspense fallback={<PageLoader/>}>
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        </Suspense>)}/>
                ))}
            </Routes>
        </Suspense>

    )
});
