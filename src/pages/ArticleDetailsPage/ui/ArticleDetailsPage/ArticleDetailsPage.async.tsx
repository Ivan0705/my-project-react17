import {lazy} from "react";

export const ArticleDetailsPageAsync = lazy(() => new Promise(res => {
        setTimeout(() => {// @ts-ignore
            res(import('./ArticleDetailsPage')
                .then(({ArticleDetailsPage}) => ({default: ArticleDetailsPage})))
        }, 1000)
    })
);
