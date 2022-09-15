import React from 'react'
import { Props } from '../helpers/types'

export default function ConnectCard(props: Props) {
    const { children, ...otherProps } = props;
    return (
        <div {...otherProps}>
            { children }
        </div>
    )
}