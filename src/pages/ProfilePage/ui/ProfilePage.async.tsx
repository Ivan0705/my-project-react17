import {lazy} from "react";

export const ProfilePageAsync = lazy(() => new Promise(res => {
        setTimeout(() => {// @ts-ignore
            res(import('./ProfilePage').then(({ProfilePage}) => ({default: ProfilePage})))
        }, 1000)
    })
);
