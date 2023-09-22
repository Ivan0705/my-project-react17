import {RouteProps} from "react-router-dom";
import * as React from "react";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    //  ERROR = "error"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    //  [AppRoutes.ERROR]: '/error'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
};
