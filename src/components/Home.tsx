import React from 'react'
import { Props } from '../helpers/types'

export default function Home({ children }: Props) {
    return (
        <>
            <body>
                <div id='home-grid-container'>
                    {children}
                </div>
            </body>
        </>

    )
}
