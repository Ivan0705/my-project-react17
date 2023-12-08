import {RouteProps} from "react-router-dom";
import * as React from "react";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "../../../pages/NotFoundPage";
import {ProfilePage} from "../../../pages/ProfilePage";
import {ArticlesPageAsync} from "../../../pages/ArticlesPage";
import {ArticleDetailsPageAsync} from "../../../pages/ArticleDetailsPage";


export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '/*',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/',//+ :id
};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnly: true,
    }
    ,
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element:
            <NotFoundPage/>
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element:
            <ArticlesPageAsync/>
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element:
            <ArticleDetailsPageAsync/>
    }
};
