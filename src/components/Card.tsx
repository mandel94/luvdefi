import React from 'react'
import { CardProps } from '../helpers/types'

export default function Card (props: CardProps) {
    const { children } = props;
    return (
        <>
            <div className='card' {...props }>
                {children}
            </div>
        </>
    )
}

