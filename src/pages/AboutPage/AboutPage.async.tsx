import React, {lazy} from 'react'

export const AboutPageAsync = lazy(() => new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import('./AboutPage').then(({AboutPage}) => ({default: AboutPage})))
        }, 1000)
    })
    )
;
