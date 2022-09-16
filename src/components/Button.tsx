import React from "react";
import { Props } from '../helpers/types'

export default function Button({ children }: Props) {
    return (
        <button type="button" className='button'>
            { children }
        </button>
    )
}