import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entites/User";
import * as React from "react";
import {RoutePath} from "../../../../shared/config/routeConfig/routeConfig";
import {Navigate, useLocation} from 'react-router-dom'

export function RequireAuth({children}: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace/>
    }
    return children;
}
