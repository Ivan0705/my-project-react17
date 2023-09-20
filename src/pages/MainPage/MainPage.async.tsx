import React, {lazy} from 'react'


export const MainPageAsync = lazy(() => new Promise(res => {

        setTimeout(() => {// @ts-ignore
            res(import('./MainPage').then(({MainPage}) => ({default: MainPage})))
        }, 1000)
    })
);
