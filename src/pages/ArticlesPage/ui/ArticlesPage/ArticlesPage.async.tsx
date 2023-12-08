import {lazy} from "react";

export const ArticlesPageAsync = lazy(() => new Promise(res => {
        setTimeout(() => {// @ts-ignore
            res(import('./ArticlesPage').then(({ArticlesPage}) => ({default: ArticlesPage})))
        }, 1000)
    })
);
