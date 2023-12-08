import * as React from "react";
import {memo, Suspense, useCallback, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {AppRouterProps, routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "../../../../shared/PageLoader/ui/PageLoader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entites/User";
import {RequireAuth} from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                <div className='page-wrapper'>
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}

            />
        )

    }, []);

    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return !(route.authOnly && !isAuth);
        });
    }, [isAuth]);

    return (

        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}

        </Routes>


    )
};
export default memo(AppRouter)
