import { ReactNode } from 'react'

export type Props = {
    children?: ReactNode;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}

export type CardProps =  Props & {
    width: number,
    height: number;
}

